const hbs = require("hbs")

hbs.registerHelper("trimString", (passedString, stringLength) =>
  passedString.length <= stringLength
    ? passedString
    : `${passedString.substring(0, stringLength)}...`
)

hbs.registerHelper("isChecked", (checkboxBoolean) =>
  checkboxBoolean ? "checked" : undefined
)
