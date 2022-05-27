export class LoginPage{
    

    loginPage_username ='#txtUsername'
    loginPage_password ='#txtPassword'
    loginPage_loginButton ='[type="submit"]'
    
    Navigate(url: string){
        cy.visit(url)
    }
    enterUsername(username: string){
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }

}