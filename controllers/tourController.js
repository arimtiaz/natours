const fs = require('fs');


const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
exports.getAllTours = (req, res) => {
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  };
  exports.checkID = (req, res, next, val) =>{
    if(req.params.id * 1 > tours.length){
        return res.status(404).json({
            status : 'fail',
            message : 'Invalid ID'
        })
        next();
    }
}  
  exports.getTour = (req, res) => {
  
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tour
      }
    });
  };
  exports.createTour = (req, res) => {
    exports.newId = tours[tours.length - 1].id + 1;
    // exports.newId = Math.random(100);
    exports.newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      err => {
        res.status(201).json({
          status: 'success',
          data: {
            tours: newTour
          }
        });
      }
    );
  };
  
  exports.updateTour = (req, res) => {
  
    return res.status(200).json({
      status: 'success',
      data: {
        tours: 'Updated Tour Here'
      }
    });
  };
  
  exports.deleteTour = (req, res) => {
  
    return res.status(204).json({
      status: 'success',
      data: null
    });
  };
  
