@echo off
echo Inicializando o repositorio git e fazendo o commit local...
git init
git add .
git commit -m "Adiciona calculadora de precificacao e relatorios - 2026-08-19 16:35"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/joaogobira/teste-tecnico
echo.
echo Tudo pronto! O commit local foi feito seguindo a sua regra de marcacao.
echo.
echo Agora, basta rodar o comando:
echo git push -u origin main
echo.
pause
