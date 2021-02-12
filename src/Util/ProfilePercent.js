export const getDriverProfilePercent = (driverProfile) => {
  let percent = 0;

  if(!driverProfile){
    return 0
  }

  if (
    driverProfile.personalInformation &&
    driverProfile.personalInformation.gender
  ) {
    percent += 10;
    console.log("added personal info");
  }

  if (
    driverProfile.qualification &&
    driverProfile.qualification.levelofEducation
  ) {
    percent += 10;
    console.log("added qualification info");

  }

  if (driverProfile.currency) {
    percent += 10;
    console.log("added currency info");

  }

  if (
    driverProfile.salaryRangeforFullTime.MinimumPay > 0 &&
    driverProfile.salaryRangeforFullTime.MaximumPay > 0
  ) {
    percent += 10;
    console.log("added personal salaryRangeforFullTime");

  }

  if (driverProfile.considerToHire!==undefined) {
    percent += 10;
    console.log("added personal considerToHire");

  }

  if (driverProfile.willProfileMoreInformation!==undefined) {
    percent += 10;
    console.log("added personal willProfileMoreInformation");

  }
  if (
    driverProfile.avatar &&
    driverProfile.otherImages &&
    driverProfile.otherImages.imageOne
  ) {
    percent += 10;
    console.log("added Images info");

  }
  // console.log("log empone", driverProfile.drivingHistory.employerOne);
  if (driverProfile.drivingHistory.employerOne.companyName !== undefined) {
    percent += 10;
    console.log("added drivingHistory ");

  }

  let ImpDoc = driverProfile.myUploads.filter(
    (docFile) => docFile.title === "Driving License"
  );

  if (ImpDoc.length === 1) {
    percent += 10;
    console.log("added ImpDoc info");

  }
  if (
    driverProfile.experienceBreakdown.length !== 0 &&
    driverProfile.driverCategories.length !== 0
  ) {
    percent += 10;
    console.log("added experienceBreakdown info");

  }
  // console.log("====% getting percent", percent);
  return percent;
};
