@echo off
echo Starting PIGEON CRM Services...

echo [1/3] Starting Backend (Port 3000)...
start "Pigeon Backend (Port 3000)" cmd /k "npm run start:dev"

echo [2/3] Starting Admin Dashboard (Port 5173)...
start "Pigeon Admin Dashboard (Port 5173)" cmd /k "cd admin-dashboard && npm run dev"

echo [3/3] Starting Customer Portal (Port 5174)...
start "Pigeon Customer Portal (Port 5174)" cmd /k "cd customer-portal && npm run dev -- --port 5174"

echo.
echo ==================================================
echo All services are booting up in separate windows!
echo ==================================================
echo - Backend API: http://localhost:3000
echo - Admin Dashboard: http://localhost:5173
echo - Customer Portal: http://localhost:5174
echo ==================================================
pause
