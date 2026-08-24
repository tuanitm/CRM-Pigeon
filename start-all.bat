@echo off
echo Starting PIGEON CRM Services...

echo [1/4] Starting Backend (Port 5170)...
start "Pigeon Backend (Port 5170)" cmd /k "npm run start:dev"

echo [2/4] Starting Admin Dashboard (Port 5173)...
start "Pigeon Admin Dashboard (Port 5173)" cmd /k "cd admin-dashboard && npm run dev -- --host"

echo [3/4] Starting Customer Portal (Port 5174)...
start "Pigeon Customer Portal (Port 5174)" cmd /k "cd customer-portal && npm run dev -- --port 5174 --host"

echo [4/4] Starting Zalo MiniApp (Port 5175)...
start "Pigeon Zalo MiniApp (Port 5175)" cmd /k "cd zalo-mini-app && npm run dev -- --port 5175 --host"

echo.
echo ==================================================
echo All services are booting up in separate windows!
echo Nginx will securely proxy these over HTTPS.
echo ==================================================
echo Once Nginx is running, access your apps here:
echo - Admin Dashboard: https://crm.imv.com.vn/
echo - Customer Portal: https://crm.imv.com.vn/portal/
echo - Zalo MiniApp:    https://crm.imv.com.vn/zalo/
echo - Backend API:     https://crm.imv.com.vn/v1/
echo ==================================================
pause
