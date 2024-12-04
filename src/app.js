	const path = require('path') 
	const express = require('express')
	const hbs = require('hbs')

	const app = express()
  
	//Define path for express config
	const publicDirectoryPath = path.join(__dirname, '../public')
	const viewsPath = path.join(__dirname, '../templates/views')	
	const partialsPath = path.join(__dirname, '../templates/partials')


	//Setup handlebars engine and views location
	app.set('view engine', 'hbs')
	app.set('views', viewsPath)
	hbs.registerPartials(partialsPath)
	//app.set('views', path.join(__dirname, '../views'))
  
	// Setup static directory to serve
	app.use(express.static(publicDirectoryPath))

	app.get('', (req, res) => {
	    res.render('index', {
	        title: 'Weather de app',
	        name: 'Andrew Mead' 
	    }) 
	})

	app.get('/about', (req, res) => {
	    res.render('about',{
	        title:'About Me to app',
	        name: 'Andrew Mead'
	        })
		})

	    app.get('/help', (req, res) => {
	        res.render('help', {
	            helpText: 'This is some helpful text.',
	            title: 'Help to app',
	            name: 'Andrew Mead ..'
	        })
	    })


	app.get('/weather', (req, res) => {
	        res.send({
	            forecast:'Its is snowing',
	            location: 'Philadelphia'
	        })
	    })

	    app.get('/help/*', (req, res) => {
	        //res.send('Help article not found')
	        res.render('404',{
	            title: '404',
	            name: 'Andrew Mead',
	            errorMessage: 'Help article not found'
	        })
	    })

	    app.get('*', (req, res) => {
	        //res.send('Pagina no encontrada')
	            res.render('404',{
	            title: '404',
	            name: 'Andrew Mead',
	            errorMessage: 'Page no found'
	        })

    
	    })

		app.listen(3000, () => {
		    console.log('Server is up on 3000 port.')
		})

