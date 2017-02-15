---
title: plynty - reset password
layout: resetpassword
---

<center>
  <img src="../uploads/plynty_logo_green.png" width="150">
  <h1> reset your plynty password </h1>
</center>
<div class="row center-xs center-md">
  <div class="col-xs-12">
    <form id="verify_email_form">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="email">
        <label class="mdl-textfield__label" for="email">enter your plynty account email</label>
      </div>
      <button type="submit" id="email_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Next
      </button>
      <div class="form-error" id="email_error"></div>
    </form>
    <form id="verify_token_form">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="token">
        <label class="mdl-textfield__label" for="token">access code</label>
      </div>
      <button type="submit" id="token_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Next
      </button>
      <div class="form-error" id="token_error"></div>
      <div class="mdl-tooltip" data-mdl-for="token">
        <p id="tooltip">access code has been sent to your mobile</p>
      </div>
    </form>
    <form id="password_change">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="password" id="password" pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,30}$">
        <label class="mdl-textfield__label" for="password">Enter New Password</label>
        <span class="mdl-textfield__error" for="password">Please enter a valid password</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="password" id="password_confirm" pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,30}$">
        <label class="mdl-textfield__label" for="password_confirm">Confirm New Password</label>
        <span class="mdl-textfield__error" for="password">Please enter a valid password</span>
      </div>
      <button type="submit" id="password_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Change Password
      </button>
      <div class="form-error" id="password_error"></div>
      <div class="mdl-tooltip" data-mdl-for="password">
        <p id="tooltip">password must be 8 to 30 characters </p>
        <p id="tooltip">password must include at least one of each of the following: upper-case letter, lower-case letter, digit</p>
      </div>
      <div class="mdl-tooltip" data-mdl-for="password_confirm">
        <p id="tooltip">password must be 8 to 30 characters </p>
        <p id="tooltip">password must include at least one of each of the following: upper-case letter, lower-case letter, digit</p>
      </div>
    </form>
    <div id="success" class="box">
      <h1>You did it!</h1>
      <p>you have successfully changed your password, please head back to plynty app and try logging in!</p>
    </div>
    <div class="footer">
      <div class="text">copyright © plynty, LLC 2017
      </div>
      <a href="/privacy.html" class="text">privacy policy | </a>
      <a href="/terms.html" class="text">terms of use</a>
    </div>
  </div>
</div>
