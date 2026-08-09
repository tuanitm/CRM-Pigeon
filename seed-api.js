const demoCustomers = [
  { fullName: 'Nguyen Thi Mai', phone: '+84901234567', email: 'mai@example.com', gender: 'female', customerType: 'End user' },
  { fullName: 'Tran Van Duc', phone: '+84912345678', email: 'duc@example.com', gender: 'male', customerType: 'End user' },
  { fullName: 'Le Thi Hoa', phone: '+84923456789', email: 'hoa@example.com', gender: 'female', customerType: 'End user' },
  { fullName: 'Pham Minh Tuan', phone: '+84934567890', email: 'tuan@example.com', gender: 'male', customerType: 'End user' },
  { fullName: 'Vo Thi Lan', phone: '+84945678901', email: 'lan@example.com', gender: 'female', customerType: 'End user' },
  { fullName: 'Hoang Van Nam', phone: '+84956789012', email: 'nam@example.com', gender: 'male', customerType: 'End user' },
  { fullName: 'Bui Thi Thuy', phone: '+84967890123', email: 'thuy@example.com', gender: 'female', customerType: 'End user' },
];

async function main() {
  console.log('Seeding demo customers via API...');
  
  for (const c of demoCustomers) {
    try {
      const res = await fetch('http://localhost:3000/v1/admin/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(c)
      });
      
      const text = await res.text();
      if (!res.ok) {
        console.error(`Failed to create ${c.fullName}: ${text}`);
      } else {
        console.log(`Created customer: ${c.fullName}`);
      }
    } catch (err) {
      console.error(`Error for ${c.fullName}:`, err.message);
    }
  }
}

main();
