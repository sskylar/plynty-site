---
title: plynty - reset password
layout: resetpassword
---

<center>
  <img src="../uploads/plynty_logo_green.png" width="100">
  <h1 id="title"> reset password</h1>
  <h2 id="description"></h2>
</center>
<div class="row center-xs center-md">
  <div class="col-xs-12">
    <form id="verify_email_form">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="email"/>
        <label class="mdl-textfield__label" for="email">enter your plynty account email</label>
        <label class="form-error" id="email_error"></label>
      </div>
      <br/>
      <button type="submit" id="email_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        next
      </button>
    </form>
    <form id="verify_token_form">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="token" pattern="[0-9]*">
        <label class="mdl-textfield__label" for="token">access code</label>
        <label class="form-error" id="token_error"></label>
      </div>
      <br/>
      <button type="submit" id="token_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        reset password
      </button>
    </form>
    <form id="password_change">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="password" id="password" pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,30}$">
        <label class="mdl-textfield__label" for="password">enter new password</label>
        <label class="form-error" id="password_error"></label>
      </div>
      <br/>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="password" id="password_confirm" pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,30}$">
        <label class="mdl-textfield__label" for="password_confirm">confirm new Password</label>
        <label class="form-error" id="confirm_password_error"></label>
      </div>
      <br/>
      <br/>
      <button type="submit" id="password_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        change password
      </button>
    </form>
    <div id="success" class="box">
      <h1 id="success_h1">Your Password Has Been Reset.</h1>
      <p>You may use your new password to log into plynty.</p>
    </div>
  </div>
</div>
