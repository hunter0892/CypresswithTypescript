import {LoginPage} from "../pages/login_page"

const loginpage = new LoginPage()

it.only('login functionality', () =>{

    loginpage.Navigate('https://opensource-demo.orangehrmlive.com/')
    loginpage.enterUsername('Admin')
    loginpage.enterPassword('admin123')
    loginpage.clickLogin()
   
    
})