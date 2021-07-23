// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}

const el_0208 = document.getElementById('status')
el_0208.textContent = 'Ready'
// ~~ Object is possibly 'null'

if (el_0208) {
  el_0208.textContent = 'Ready' // OK, null has been excluded
}
el_0208!.textContent = 'Ready' // OK, we've asserted that el is non-null
