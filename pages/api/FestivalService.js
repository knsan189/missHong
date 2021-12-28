import axios from "axios";
import HashMap from "hashmap";

class FestivalService {
  static FESTIVAL_URL = process.env.REACT_APP_FESTIVAL_API_URL;

  static HOLIDAY_URL = process.env.REACT_APP_HOLIDAY_API_URL;

  static SEARCH_FESTIVAL =
    process.env.FESTIVAL_URL || "/openapi/service/rest/KorService";

  static API_KEY =
    "P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw==";

  static casheMap = new HashMap();

  static getThisMonthFestival = async (
    eventDate,
    pageNo,
    arrange,
    areaCode
  ) => {
    try {
      const { data } = await axios({
        url: `${FestivalService.SEARCH_FESTIVAL}/searchFestival`,
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

  static searchKeyword = async (keyword, pageNo, arrage) => {
    try {
      const response = await axios({
        url: `${FestivalService.SEARCH_FESTIVAL}/searchKeyword`,
        method: "get",
        params: {
          serviceKey: FestivalService.API_KEY,
          MobileOS: "ETC",
          MobileApp: "Festival",
          contentTypeId: 15,
          numOfRows: 20,
          keyword,
          pageNo: pageNo || 1,
        },
      });
      return response.data.response.body;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  static searchAreaCode = async (code, pageNo = 1) => {
    try {
      const { areaCode, sigunguCode } = code;
      const { data } = await axios({
        url: `${FestivalService.SEARCH_FESTIVAL}/searchFestival`,
        method: "get",
        params: {
          serviceKey: FestivalService.API_KEY,
          pageNo,
          numOfRows: "30",
          _type: "json",
          sigunguCode,
          areaCode,
          MobileOS: "ETC",
          MobileApp: "Festival",
          arrange: "B",
          listYN: "Y",
        },
      });
      return data.response.body;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  static getFestivalDetail = async (contentId) => {
    try {
      let data = FestivalService.casheMap.get(contentId);
      if (!data) {
        const response = await axios({
          url: `${FestivalService.SEARCH_FESTIVAL}/detailCommon`,
          method: "get",
          params: {
            serviceKey: FestivalService.API_KEY,
            type: "_json",
            MobileOS: "ETC",
            MobileApp: "Festival",
            contentId,
            defaultYN: "Y",
            firstImageYN: "Y",
            areacodeYN: "Y",
            addrinfoYN: "Y",
            mapinfoYN: "Y",
            overviewYN: "Y",
          },
        });
        data = response.data.response.body.items.item;
        const intro = await FestivalService.getFestivalDetailIntro(contentId);
        const images = await FestivalService.getFestivalDetailImage(contentId);
        data = { ...data, ...intro, images };
        if (FestivalService.casheMap.size > 1000) {
          FestivalService.casheMap.clear();
        }
        FestivalService.casheMap.set(contentId, data);
      }
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  static getFestivalDetailIntro = async (contentId) => {
    try {
      const response = await axios({
        url: `${FestivalService.SEARCH_FESTIVAL}/detailIntro`,
        method: "get",
        params: {
          serviceKey: FestivalService.API_KEY,
          type: "_json",
          MobileOS: "ETC",
          MobileApp: "Festival",
          contentId,
          contentTypeId: 15,
        },
      });
      return response.data.response.body.items.item;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  static getFestivalDetailImage = async (contentId) => {
    try {
      const response = await axios({
        url: `${FestivalService.SEARCH_FESTIVAL}/detailImage`,
        method: "get",
        params: {
          serviceKey: FestivalService.API_KEY,
          type: "_json",
          MobileOS: "ETC",
          MobileApp: "Festival",
          contentId,
          detailImage: "Y",
          subImageYN: "Y",
        },
      });
      return response.data.response.body.items.item;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default FestivalService;
