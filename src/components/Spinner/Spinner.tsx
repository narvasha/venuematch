import spinner from "../../assets/spinner.png"

interface SpinnerProps{
    width:string
    }
    
    export default function Spinner({width}:SpinnerProps) {
      return (
        <div className="text-center">
          <img src={spinner} alt="loading" style={{ width: `${width}`,marginLeft:"4px" }} />
        </div>
      );
    }