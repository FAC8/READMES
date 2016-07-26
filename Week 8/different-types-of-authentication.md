# Different types of authentication

Let's briefly recap the difference betweeen authentication and authorization. Authentication is a process whereby we determine whether the user provides the correctly matching details. Authorization is a process whereby we grant access to certain resources once we have authenticated the user. 

## Two-factor authentication

Two factor authentication adds an extra level of security as opposed to single factor authentication which just requires a password and a username. Two factor authentication requires at least two of the following three types of credentials before access is granted. 

- Something you know such as a username and password.
- Something you have, such as an email address or phone number.
- Something you are, such as a fingerprint or voice print. 

## Some different types of two-factor authentication
On top of providing a username and password, the following examples each make up the second factor of authentication.

- SMS Verification
This is when when you receive a sms code which you will then need to use to access permission to your log in. 
- App-Based authentication
Some mobile apps provide two step verification using the app istself. Twitter for example allows you to enable "login verification". Whenever you attmept to log into Twitter from another device you'll have to verify that login attempt from the mobile app on your phone. 
- Physical authentication keys
This is a new method that is becoming more popular and is available with Github and Dropbox accounts, among others. 
This method requires a physical token, which is just a small USB device known as U2F. Whenever you want to log into your account from a new computer, you will have to insert the device and press a button on it. This method is considered more secure than SMS because it can't be intercepted. 
- Email authentication
This method makes use of your email. It generates an access code that is sent to your email which you need in addition to your other credentials to log into your xxx account. For instance, if you try to log into your xxx account, you input your username and password, and then you need to access your email for the access token. The potential miscreant would therefore need to intercept also your email in order to gain access.

## Three-factor authentication
Obviously, this type of authentication is one more layer more secure than the two-factor kind. It is unlikely that the potential miscreant would be in possession of all three 'factors':

- knowledge (username & password, ...)
- possession (card, ...)
- inherence (biologibal traits)

Obviously, it is near impossible for sites like Facebook to use three-factor authentication. In the future, when your keyboard will be able to scan you fingers for fingerprints or your camera will be able to scan your eyes, this might be, however, possible. 

At the moment, this form of authentication is used only in high-security environments, such as in business, government agencies, military bases or James Bond films. Obviously, elements from all three categories should be of high standards. For example, passwords should be strong and the image recognition software shouldn't be able to be fooled by a picture.

## Four, five-factor authentication
This type of authenticatin makes use of the three categories described above plus location and time factors:

- knowledge (username & password, ...)
- possession (card, ...)
- inherence (biological traits)
- location factors
- time factors

Location factors limit the number of lacations you are allowed to log in from. The GPS enabled phones make this possible.

Regarding time factors, consider the following example: A British bank customer cannot access his account in London and then in Paris within 30 minutes. If his/her bank registered such effort, it would become clear that someone in Paris has infiltrated his/her account. 

##Lollipop questions

- What is the difference between authorisation and authentication?
- Name two types of credential used in two-factor authentication?
- Explain five-factor authentication?
