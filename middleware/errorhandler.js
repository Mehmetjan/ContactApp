const {constants}=require("../constants");
const errorHandler=(err, req, res, next)=>{
    const statusCode=res.statusCode? res.statusCode:500;
    res.json({message:err.message, stackTrace:err.stack});
  switch (statusCode){
    case constants.VALIDATION_ERROR:
    res.json({
        title:"validation failed",
        message:err.message,
        stackTrace:err.stack,

    });
      break;
    case constants.OT_FOUND:
        res.json({
            title:"not found",
            message:err.message,
            stackTrace:err.stack,

        });
        break;
     case constant.UNAUTHORIZED:
       res.json({
        title:"un-authorized",
            message:err.message,
            stackTrace:err.stack,

       });
       break;
      case constant.FORBIDDEN:
        res.json({
            title:"forbidded",
            message:err.message,
            stackTrace:err.stack,
        }); break;

        case constant.SERVER_ERROR:
            res.json({
                title:"server error",
            message:err.message,
            stackTrace:err.stack,
            });break;
            default:
                console.log(" All good!")
                break;

    } ;
}

module.exports=errorHandler;