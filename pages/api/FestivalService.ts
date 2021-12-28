import axios from "axios";
import HashMap from "hashmap";
import { empty, get, set, size } from "@typed/hashmap";

// arrage (A=제목순, B=조회순, C=수정일순, D=생성일순)
// 대표이미지가 반드시 있는 정렬 (O=제목순, P=조회순, Q=수정일순)

let cacheMap = empty<string, object>();

class FestivalService {
  static FESTIVAL_URL = process.env.REACT_APP_FESTIVAL_API_URL;

  static HOLIDAY_URL = process.env.REACT_APP_HOLIDAY_API_URL;

  static SEARCH_FESTIVAL = process.env.FESTIVAL_URL || "/openapi/service/rest/KorService";

  static API_KEY =
    "P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw==";

  static getThisMonthFestival = async (
    eventDate: number,
    pageNo: number,
    arrange: string,
    areaCode: number | null,
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
      console.log(cacheMap);
      let data = get(contentId, cacheMap);
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
        data = { ...data, ...intro, images: images || [] };
        if (size(cacheMap) > 1000) {
          cacheMap = empty<string, object>();
        }
        cacheMap = set(contentId, data, cacheMap);
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
