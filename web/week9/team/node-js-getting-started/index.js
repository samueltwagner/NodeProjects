const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', (req, res) => res.render('pages/math') , function computeMath(request, response){

      var num1 = Number(request.query.num1);
      var num2 = Number(request.query.num2);
      var sign = request.query.sign;
      var result = 0;


      if (sign == "+"){
        //num1 + num2
        result = num1 + num2;
        console.log(result);
      }
    
    // Then, report the correct result on the console and verify that everything is working.
    console.log();
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
