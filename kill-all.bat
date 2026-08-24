@echo off

echo ====================================
echo Kill processes on ports 5170 5173 5174 5175
echo ====================================

call :killPort 5170
call :killPort 5173
call :killPort 5174
call :killPort 5175

echo.
echo Finished.
pause
exit /b

:killPort
set PORT=%1

echo.
echo Checking port %PORT% ...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%PORT% ^| findstr LISTENING') do (
    echo Found PID %%a on port %PORT%
    taskkill /F /PID %%a
)

exit /b