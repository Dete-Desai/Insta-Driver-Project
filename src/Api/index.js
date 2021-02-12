import axios from "axios";

export const PostRoute = () => ({
  Post: async (url, data, config) => await axios.post(url, data, config),
  Get: async (url, data, config) => await axios.get(url, data, config),
  Delete: async (url, config) => await axios.delete(url, config),
  Patch: async (url, data, config) => await axios.patch(url, data, config),
});

export const getUserInfo = async (token) => {
  let config = {
    headers: { Authorization: `bearer ${token}` },
  };
  try {
    let response = await axios.get("users/me", config);
    return response.data.response_data;
  } catch (error) {
    console.log("error in fetching user info", error);
  }
};

export const getDriverStaticFormData = async () => {
  try {
    let [
      countryListResponse,
      maritialStatusResponse,
      educationLevelResponse,
      driverCategoryResponse,
      rideHailingPlatformResponse,
    ] = await Promise.all([
      axios.get("users/countries"),
      axios.get("users/maritialstatus"),
      axios.get("users/educationlevel"),
      axios.get("users/drivercategory"),
      axios.get("/users/ridehailing-platforms"),
    ]);
    var formStaticData = {};

    formStaticData.countries = countryListResponse.data.response_data;

    formStaticData.maritialStatus = maritialStatusResponse.data.response_data;

    formStaticData.education = educationLevelResponse.data.response_data;

    formStaticData.driverCategory = driverCategoryResponse.data.response_data;

    console.log(
      "----------- driver category ",
      driverCategoryResponse.data.response_data
    );

    formStaticData.rideHailingPlatforms =
      rideHailingPlatformResponse.data.response_data;
    console.log("--------------- formStaticData", formStaticData);
    return formStaticData;
  } catch (error) {
    console.log("error in fetching user info", error);
  }
};

export const getEmployerStaticFormData = async () => {
  try {
    let [employerProfileResponse] = await Promise.all([
      axios.get("users/employer"),
    ]);
    var formStaticData = {};

    formStaticData.employer = employerProfileResponse.data.response_data;

    return formStaticData;
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const getAllJob = async () => {
  try {
    let jobListResponse = await axios.get("jobpost/list");

    let jobListResponseData = jobListResponse.data.response_data;

    return jobListResponseData;
  } catch (error) {
    console.log("error in fetching jobs".error);
  }
};

export const getAllDrivers = async () => {
  try {
    let allDriversResponse = await axios.get("/users/drivers");

    let allDriversResponseData = allDriversResponse.data.response_data;

    return allDriversResponseData;
  } catch (error) {
    console.log("error in fetching jobs".error);
  }
};

export const getSpecificJobCard = async (jobpostId) => {
  try {
    let specificJobCard = await axios.get(`/jobpost/${jobpostId}`);

    let specificJobCardData = specificJobCard.data.response_data;
    console.log(specificJobCardData);
    return specificJobCardData;
  } catch (error) {
    console.log("error in fetching the card".error);
  }
};

export const getAllDriverCards = async () => {
  try {
    let allDriverCardsResp = await axios.get("jobcard/list");

    console.log("--------jobcards driver", allDriverCardsResp);

    let allDriverCardsRespData = allDriverCardsResp.data.response_data;

    return allDriverCardsRespData;
  } catch (error) {
    console.log("error in fetching jobs".error);
  }
};

export const getSingleHireMeCard = async (id) => {
  try {
    let hireMeCardResp = await axios.get(`jobcard/driver/${id}`);

    let hireMeCardData = hireMeCardResp.data.response_data;

    return hireMeCardData;
  } catch (error) {
    console.log("error in fetching hire me card".error);
  }
};
