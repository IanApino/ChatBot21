'use strict';
var mongoose = require('mongoose');
var PaperInfo = mongoose.model('papers');

exports.processRequest = function(req, res) {
    if (req.body.result.action == "show-requirements") {
        getPaperRequirements(req,res)
      }
      else if (req.body.result.action == "show-co")
      {
        getPaperRequirements(req,res)
      }
    };

    function getPaperRequirements(req,res)
    {
    let paperToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.papers ? req.body.result.parameters.papers : 'Unknown';
    PaperInfo.findOne({name:paperToSearch},function(err,paperExists)
        {
            if (err)
            {
            return res.json({
                speech: 'Something went wrong!',
                displayText: 'Something went wrong!',
                source: 'Requirements'
            });
            }
    if (paperExists)
            {
            return res.json({
                    speech: paperExists.re,
                    displayText: paperExists.re,
                    source: 'Requirements'
                });
            }
            else {
            return res.json({
                    speech: 'Currently I am not having information about this paper',
                    displayText: 'Currently I am not having information about this paper',
                    source: 'Requirements'
                });
            }
        });
    }