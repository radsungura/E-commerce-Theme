<template>
    <div>
        <h1> IDENTIFICATION </h1>
<form action="" method="">
    <div>
  <label class="label">Prénom : </label>
  <input class="controle" type="text" name="prenom" required pattern="{0,20}" placeholder="Prénom">
  <span class="resultat"></span>
    </div>
    <div>
        <label for="lastname">Nom : </label>
        <input type="text" id="nom" name="contact.nom" placeholder= "Nom">
    </div>
     <div>
        <label for="e-mail">Email : </label>
        <input type="e-mail" id="e-mail" name="contact.email"  placeholder= "rukundo@gmail.com">
    </div>
    <div>
        <label class="label"> No Compte : </label>
        <input class="controle" type="numero" id="numero" name="contact.numero" required pattern="{0,20}" placeholder= "000000">
        <span class="resultat"></span>
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