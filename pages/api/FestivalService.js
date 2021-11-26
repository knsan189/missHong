import axios from "axios";

class FestivalService {
  static FESTIVAL_URL = process.env.REACT_APP_FESTIVAL_API_URL;

  static HOLIDAY_URL = process.env.REACT_APP_HOLIDAY_API_URL;

  static SEARCH_FESTIVAL = "/openapi/service/rest/KorService/searchFestival";

  static API_KEY =
    "P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw==";

  static getThisMonthFestival = async (
    eventDate,
    pageNo,
    arrange,
    areaCode
  ) => {
    try {
      const { data } = await axios({
        url: FestivalService.SEARCH_FESTIVAL,
        method: "get",
        params: {
          serviceKey: FestivalService.API_KEY,
          pageNo,
          numOfRows: "10",
          _type: "json",
          MobileOS: "ETC",
          MobileApp: "Festival",
          arrange,
          listYN: "Y",
          eventStartDate: eventDate,
          areaCode,
          eventEndDate: eventDate,
        },
      });
      return data.response.body;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
}

export default FestivalService;
