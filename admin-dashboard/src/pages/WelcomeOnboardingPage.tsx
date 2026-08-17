import React, { useEffect, useState } from 'react';
import { Card, Typography, Form, InputNumber, Switch, DatePicker, Button, message, Space, Alert, Select } from 'antd';
import { SaveOutlined, RocketOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { loyaltyApi, productApi } from '../services/api';

const { Title, Text } = Typography;

export default function WelcomeOnboardingPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [enablePoints, setEnablePoints] = useState(true);
  const [enableProduct, setEnableProduct] = useState(false);
  const [enableGift, setEnableGift] = useState(false);
  const [enableVoucher, setEnableVoucher] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [rewards, setRewards] = useState<any[]>([]);

  useEffect(() => {
    loadMasterData();
    loadRule();
  }, []);

  const loadMasterData = async () => {
    try {
      const [prods, rwds] = await Promise.all([
        productApi.list(),
        loyaltyApi.listRewards()
      ]);
      setProducts(prods);
      setRewards(rwds);
    } catch (err) {
      console.error('Failed to load master data', err);
    }
  };

  const loadRule = async () => {
    setLoading(true);
    try {
      const data = await loyaltyApi.getWelcomeRule();
      if (data) {
        const formula = data.pointsFormula || {};
        
        let hasPoints = false, hasProduct = false, hasGift = false, hasVoucher = false;
        let pointsVal = 500, pId = undefined, rId = undefined, vId = undefined;

        if (formula.rewards && Array.isArray(formula.rewards)) {
          formula.rewards.forEach((r: any) => {
            if (r.type === 'points') { hasPoints = true; pointsVal = r.value; }
            if (r.type === 'product') { hasProduct = true; pId = r.productId; }
            if (r.type === 'free_gift') { hasGift = true; rId = r.rewardId; }
            if (r.type === 'voucher') { hasVoucher = true; vId = r.rewardId; }
          });
        } else if (formula.rewardType) {
          // Legacy support
          if (formula.rewardType === 'points') { hasPoints = true; pointsVal = formula.value; }
          if (formula.rewardType === 'product') { hasProduct = true; pId = formula.productId; }
          if (formula.rewardType === 'free_gift') { hasGift = true; rId = formula.rewardId; }
          if (formula.rewardType === 'voucher') { hasVoucher = true; vId = formula.rewardId; }
        }

        setEnablePoints(hasPoints);
        setEnableProduct(hasProduct);
        setEnableGift(hasGift);
        setEnableVoucher(hasVoucher);

        form.setFieldsValue({
          isActive: data.isActive,
          enablePoints: hasPoints,
          enableProduct: hasProduct,
          enableGift: hasGift,
          enableVoucher: hasVoucher,
          points: pointsVal,
          productId: pId,
          rewardId: rId,
          voucherId: vId,
          dateRange: [
            data.validFrom ? dayjs(data.validFrom) : undefined,
            data.validUntil ? dayjs(data.validUntil) : undefined,
          ].filter(Boolean) as any,
        });
      }
    } catch (err: any) {
      message.error('Failed to load welcome onboarding config');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (values: any) => {
    setSaving(true);
    try {
      const rewards = [];
      if (values.enablePoints) rewards.push({ type: 'points', value: values.points });
      if (values.enableProduct) rewards.push({ type: 'product', productId: values.productId });
      if (values.enableGift) rewards.push({ type: 'free_gift', rewardId: values.rewardId });
      if (values.enableVoucher) rewards.push({ type: 'voucher', rewardId: values.voucherId });

      const payload = {
        isActive: values.isActive ?? false,
        points: { rewards }, // Backend stores this in pointsFormula JSON
        validFrom: values.dateRange?.[0] ? values.dateRange[0].toISOString() : undefined,
        validUntil: values.dateRange?.[1] ? values.dateRange[1].toISOString() : undefined,
      };
      await loyaltyApi.upsertWelcomeRule(payload);
      message.success('Welcome Onboarding configuration saved successfully!');
      loadRule();
    } catch (err: any) {
      message.error('Failed to save config: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb', maxWidth: 600 }} loading={loading}>
        <Alert
          message="How it works"
          description="When a brand-new customer successfully registers (via the Customer Portal), this automation will instantly award them the configured reward (Points, Free Gift, or Product) and log it in their Journey Activity."
          type="info"
          showIcon
          style={{ marginBottom: 24, borderRadius: 8 }}
        />

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
          initialValues={{ isActive: false, enablePoints: true, enableProduct: false, enableGift: false, enableVoucher: false, points: 500 }}
          onValuesChange={(changed) => {
            if (changed.enablePoints !== undefined) setEnablePoints(changed.enablePoints);
            if (changed.enableProduct !== undefined) setEnableProduct(changed.enableProduct);
            if (changed.enableGift !== undefined) setEnableGift(changed.enableGift);
            if (changed.enableVoucher !== undefined) setEnableVoucher(changed.enableVoucher);
          }}
        >
          <Form.Item name="isActive" label="Enable Welcome Onboarding" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Title level={5} style={{ marginTop: 24, marginBottom: 16 }}>Reward Types</Title>
          <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
            You can enable multiple reward types to create a "Welcome Package".
          </Text>

          <Card size="small" style={{ marginBottom: 16, borderColor: enablePoints ? '#1677ff' : '#e5e7eb' }}>
            <Form.Item name="enablePoints" valuePropName="checked" style={{ marginBottom: enablePoints ? 16 : 0 }}>
              <Switch checkedChildren="Points Enabled" unCheckedChildren="Bonus Points" />
            </Form.Item>
            {enablePoints && (
              <Form.Item 
                name="points" 
                label="Bonus Points Reward" 
                rules={[{ required: true, message: 'Please enter bonus points amount' }]}
                style={{ marginBottom: 0 }}
              >
                <InputNumber min={0} style={{ width: '100%' }} size="large" addonAfter="pts" />
              </Form.Item>
            )}
          </Card>

          <Card size="small" style={{ marginBottom: 16, borderColor: enableProduct ? '#1677ff' : '#e5e7eb' }}>
            <Form.Item name="enableProduct" valuePropName="checked" style={{ marginBottom: enableProduct ? 16 : 0 }}>
              <Switch checkedChildren="Product Enabled" unCheckedChildren="Brand Product" />
            </Form.Item>
            {enableProduct && (
              <Form.Item 
                name="productId" 
                label="Select Company Brand Product" 
                rules={[{ required: true, message: 'Please select a product' }]}
                style={{ marginBottom: 0 }}
              >
                <Select size="large" showSearch optionFilterProp="children" placeholder="Select product...">
                  {products.map(p => (
                    <Select.Option key={p.id} value={p.id}>{p.name} ({p.sku})</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          </Card>

          <Card size="small" style={{ marginBottom: 16, borderColor: enableGift ? '#1677ff' : '#e5e7eb' }}>
            <Form.Item name="enableGift" valuePropName="checked" style={{ marginBottom: enableGift ? 16 : 0 }}>
              <Switch checkedChildren="Gift Enabled" unCheckedChildren="Free Gift (GWP)" />
            </Form.Item>
            {enableGift && (
              <Form.Item 
                name="rewardId" 
                label="Select Free Gift" 
                rules={[{ required: true, message: 'Please select a free gift' }]}
                style={{ marginBottom: 0 }}
              >
                <Select size="large" showSearch optionFilterProp="children" placeholder="Select free gift...">
                  {rewards.filter(r => r.category === 'gift' || r.category === 'gwp').map(r => (
                    <Select.Option key={r.id} value={r.id}>{r.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          </Card>

          <Card size="small" style={{ marginBottom: 24, borderColor: enableVoucher ? '#1677ff' : '#e5e7eb' }}>
            <Form.Item name="enableVoucher" valuePropName="checked" style={{ marginBottom: enableVoucher ? 16 : 0 }}>
              <Switch checkedChildren="Voucher Enabled" unCheckedChildren="Voucher / Discount" />
            </Form.Item>
            {enableVoucher && (
              <Form.Item 
                name="voucherId" 
                label="Select Voucher" 
                rules={[{ required: true, message: 'Please select a voucher' }]}
                style={{ marginBottom: 0 }}
              >
                <Select size="large" showSearch optionFilterProp="children" placeholder="Select voucher...">
                  {rewards.filter(r => r.category === 'voucher' || r.category === 'discount').map(r => (
                    <Select.Option key={r.id} value={r.id}>{r.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          </Card>

          <Form.Item 
            name="dateRange" 
            label="Campaign Validity Period (Optional)"
            extra="Leave blank to run this automation indefinitely."
          >
            <DatePicker.RangePicker style={{ width: '100%' }} size="large" showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>

          <Form.Item style={{ marginTop: 32, marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />} size="large" loading={saving}>
              Save Configuration
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
