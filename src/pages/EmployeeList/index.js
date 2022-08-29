import React from "react";

import { useNavigate } from "react-router-dom";
import { postEmployeecapability } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Column, Row, Img, Text, Button, Stack, List } from "components";

const EmployeeListPage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();

  function callApi() {
    const req = {};

    postEmployeecapability(req)
      .then((res) => {
        setapiData(res);

        toast.success("Employee inserted..");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error occured...");
      });
  }
  function handleNavigate1() {
    navigate("/employeecapablitymapping");
  }
  function handleNavigate3() {
    navigate("/employeecapablitymapping");
  }
  function handleNavigate4() {
    navigate("/homepage");
  }
  function handleNavigate14() {
    navigate("/homepage");
  }
  function handleNavigate15() {
    navigate("/employeecapablitymapping");
  }

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center justify-end mx-[auto] w-[100%]">
        <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] w-[100%]">
          <Img
            src="images/img_image2.png"
            className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
            alt="imageTwo"
          />
          <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            FrashTeam
          </Text>
        </Row>
        <Row className="bg-white_A700 border border-indigo_50 border-solid font-sourcesanspro items-center justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[98%]">
          <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-deep_purple_A200 w-[auto]">
            Employee List
          </Text>
          <Button
            className="common-pointer font-normal lg:ml-[541px] xl:ml-[619px] 2xl:ml-[696px] 3xl:ml-[835px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            onClick={handleNavigate4}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            DashBoard
          </Button>
          <Button
            className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[7%]"
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Employee List
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            onClick={handleNavigate3}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Capabilities
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="lgIcn"
            variant="icbFillBluegray900"
          >
            <Img
              src="images/img_plus.svg"
              className="flex items-center justify-center lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
              alt="plus"
            />
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="mdIcn"
            variant="icbOutlineGray201"
          >
            <Img
              src="images/img_vector.svg"
              className="flex items-center justify-center"
              alt="Vector"
            />
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="smIcn"
            variant="icbOutlineGray201"
          >
            <Img
              src="images/img_vector_gray_700.svg"
              className="flex items-center justify-center"
              alt="Vector One"
            />
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="lgIcn"
            variant="icbFillAmber100"
          >
            <Img
              src="images/img_volume.svg"
              className="flex items-center justify-center"
              alt="volume"
            />
          </Button>
        </Row>
        <Column className="bg-white_A700 font-inter items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[97%]">
          <Row className="items-center justify-between w-[99%]">
            <Text className="font-inder font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
              Employee list
            </Text>
            <Button
              className="common-pointer font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
              onClick={() => {
                callApi();
              }}
              shape="RoundedBorder4"
              size="md"
              variant="FillBluegray900"
            >
              Sync All Employee
            </Button>
          </Row>
          <Row className="items-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]">
            <Stack className="bg-gray_50 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] w-[6%]">
              <Img
                src="images/img_square.svg"
                className="absolute bottom-[0] lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] right-[19%] w-[17%]"
                alt="square"
              />
            </Stack>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Name
            </Text>
            <Button
              className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
              size="lg"
              variant="OutlineGray202"
            >
              Surname
            </Button>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Designation
            </Text>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              official_email
            </Text>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Joining Date
            </Text>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Gender
            </Text>
          </Row>
          <List
            className="bg-white_A700 border-bw05 border-gray_202 border-solid gap-[0] lg:mb-[154px] xl:mb-[177px] 2xl:mb-[199px] 3xl:mb-[238px] min-h-[auto] lg:pb-[148px] xl:pb-[169px] 2xl:pb-[191px] 3xl:pb-[229px] w-[99%]"
            orientation="vertical"
          >
            <Row className="items-center justify-evenly my-[0] w-[100%]">
              <Stack className="bg-white_A700 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] w-[6%]">
                <Img
                  src="images/img_square.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] inset-y-[0] my-[auto] right-[14%] w-[17%]"
                  alt="square One"
                />
              </Stack>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Design
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2400
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-21
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-21
              </Text>
            </Row>
            <Row className="items-center justify-evenly my-[0] w-[100%]">
              <Stack className="bg-white_A700 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] w-[6%]">
                <Img
                  src="images/img_square.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] inset-y-[0] my-[auto] right-[14%] w-[17%]"
                  alt="square Two"
                />
              </Stack>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Prototype
              </Text>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                Pulvinar eu facilisis turpis imperdiet sed.
              </Button>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                Pulvinar eu facilisis turpis imperdiet sed.
              </Button>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                1000
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-06-29
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-06-29
              </Text>
            </Row>
            <Row className="items-center justify-evenly my-[0] w-[100%]">
              <Stack className="bg-white_A700 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] w-[6%]">
                <Img
                  src="images/img_square.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] inset-y-[0] my-[auto] right-[14%] w-[17%]"
                  alt="square Three"
                />
              </Stack>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Inspect
              </Text>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                consectetur adipiscing elit,
              </Button>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                consectetur adipiscing elit,
              </Button>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                0900
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-04-23
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-04-23
              </Text>
            </Row>
            <Row className="items-center justify-evenly my-[0] w-[100%]">
              <Stack className="bg-white_A700 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] w-[6%]">
                <Img
                  src="images/img_square.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] inset-y-[0] my-[auto] right-[14%] w-[17%]"
                  alt="square Four"
                />
              </Stack>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Content
              </Text>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                sed do eiusmod tempor incididunt
              </Button>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                sed do eiusmod tempor incididunt
              </Button>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2100
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-22
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-22
              </Text>
            </Row>
            <Row className="items-center justify-evenly my-[0] w-[100%]">
              <Stack className="bg-white_A700 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] w-[6%]">
                <Img
                  src="images/img_square.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] inset-y-[0] my-[auto] right-[14%] w-[17%]"
                  alt="square Five"
                />
              </Stack>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Effects
              </Text>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                quis nostrud exercitation ullamco laboris
              </Button>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                quis nostrud exercitation ullamco laboris
              </Button>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                0300
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-04
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-04
              </Text>
            </Row>
            <Row className="items-center justify-evenly my-[0] w-[100%]">
              <Stack className="bg-white_A700 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] w-[6%]">
                <Img
                  src="images/img_square.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] inset-y-[0] my-[auto] right-[14%] w-[17%]"
                  alt="square Six"
                />
              </Stack>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Export
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                sunt in culpa qui officia
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                sunt in culpa qui officia
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                1100
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-03-22
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-03-22
              </Text>
            </Row>
            <Row className="items-center justify-evenly my-[0] w-[100%]">
              <Stack className="bg-white_A700 border-bw05 border-gray_202 border-solid lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] w-[6%]">
                <Img
                  src="images/img_square.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] inset-y-[0] my-[auto] right-[14%] w-[17%]"
                  alt="square Seven"
                />
              </Stack>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                Auto layout
              </Text>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                Ut enim ad minim veniam
              </Button>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[16%]"
                size="lg"
                variant="OutlineGray2021_2"
              >
                Ut enim ad minim veniam
              </Button>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                1800
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-13
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
                2022-02-13
              </Text>
            </Row>
          </List>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default EmployeeListPage;
