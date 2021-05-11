<template>
    <div>
        <h1> Login </h1>
<form action="/home" method="">
    <div>
  <label class="label">User : </label>
  <input class="controle" type="text" name="name" required pattern="{0,20}" placeholder="username or email">
    </div>
    <div>
        <label for="lastname">Password : </label>
        <input type="password" id="pass" name="pass" placeholder= "password">
    </div>
    <div class="button">
        <button type="">Enregistrer</button>
    </div>
</form>
    </div>
</template>
 
<script>
 
</script>
 
<style>
form {
 
  margin: 0 auto;
  width: 400px;
 
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}
 
form div + div {
  margin-top: 1em;
}
 
label {
 
  display: inline-block;
  width: 90px;
  text-align: right;
}
 
input, textarea {
 
  font: 1em sans-serif;
 
 
  width: 300px;
  box-sizing: border-box;
 
 
  border: 1px solid #999;
}
 
input:focus, textarea:focus {
 
  border-color: #000;
}
 
textarea {
 
  vertical-align: top;
 
 
  height: 5em;
}
 
.button {
 
  padding-left: 90px;
}
 
button {
 
 
  margin-left: .5em;
}
 
</style>