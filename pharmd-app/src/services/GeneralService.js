import axios from "axios";

class GeneralService {
  // Feed this an array of axios promises
  static doAllRequests = requests => axios.all(requests);
}

export default GeneralService;
