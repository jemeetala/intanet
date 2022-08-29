import React from "react";

import { useNavigate } from "react-router-dom";
import { getEmployees, getBranches } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Column, Row, Img, Text, Button, List, Stack, Line } from "components";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  LineChart,
  Line as RechartsLine,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { PieData, COLORS, LineData, BarData } from "./chartData.js";

const HomePagePage = () => {
  const [apiData2, setapiData2] = React.useState();
  const [apiData3, setapiData3] = React.useState();
  const [apiData4, setapiData4] = React.useState();
  const navigate = useNavigate();

  function callApi2() {
    const req = {};

    getEmployees(req)
      .then((res) => {
        setapiData2(res);

        localStorage.setItem("emplist", JSON.stringify(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi4(data) {
    const req = {};

    getEmployees(req)
      .then((res) => {
        setapiData4(res);

        localStorage.setItem("empbranch", JSON.stringify(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi3() {
    const req = {};

    getBranches(req)
      .then((res) => {
        setapiData3(res);

        localStorage.setItem("resbranch", JSON.stringify(res));

        callApi4(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Not");
      });
  }
  function handleNavigate9() {
    navigate("/employeelist");
  }
  function handleNavigate10() {
    navigate("/employeecapablitymapping");
  }
  function handleNavigate12() {
    navigate("/employeelist");
  }
  function handleNavigate13() {
    navigate("/employeecapablitymapping");
  }

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center mx-[auto] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] w-[100%]">
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
            My DashBoard
          </Text>
          <Button
            className="font-normal lg:ml-[539px] xl:ml-[617px] 2xl:ml-[694px] 3xl:ml-[833px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            DashBoard
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[7%]"
            onClick={handleNavigate9}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Employee List
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            onClick={handleNavigate10}
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
        <List
          className="font-actor gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]"
          orientation="vertical"
        >
          <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
            <Column className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Head Count By Designation
              </Text>
              <Stack className="font-segoeui lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[91%]">
                <Row className="absolute items-center justify-evenly w-[100%]">
                  <Column className="w-[65%]">
                    <Row className="items-center lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[53%]">
                      <Column className="w-[35%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          50%
                        </Text>
                        <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Screening
                        </Text>
                      </Column>
                      <Img
                        src="images/img_line6.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[57%]"
                        alt="LineSix"
                      />
                    </Row>
                    <Row className="items-center lg:mt-[118px] xl:mt-[135px] 2xl:mt-[152px] 3xl:mt-[182px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[53%]">
                      <Column className="w-[35%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          50%
                        </Text>
                        <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Screening
                        </Text>
                      </Column>
                      <Img
                        src="images/img_line6.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[57%]"
                        alt="LineNine"
                      />
                    </Row>
                  </Column>
                  <Column className="items-center w-[35%]">
                    <Row className="items-center pr-[1px] py-[1px] rotate-[180deg] w-[100%]">
                      <Img
                        src="images/img_line6.svg"
                        className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[57%]"
                        alt="LineNine One"
                      />
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] rotate-[180deg] w-[24%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          20%
                        </Text>
                        <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Hire
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] pr-[1px] py-[1px] w-[100%]">
                      <Line className="bg-bluegray_100 h-[2px] w-[57%]" />
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] w-[24%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          15%
                        </Text>
                        <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Offer
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] py-[1px] rotate-[180deg] w-[100%]">
                      <Img
                        src="images/img_line6.svg"
                        className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[57%]"
                        alt="LineNine Two"
                      />
                      <Column className="mt-[3px] w-[37%]">
                        <Text className="font-bold ml-[2px] rotate-[180deg] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          15%
                        </Text>
                        <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rotate-[180deg] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Interviews
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <div className="common-pointer absolute lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] inset-x-[27%] lg:w-[200px] xl:w-[229px] 2xl:w-[258px] 3xl:w-[309px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={PieData} dataKey="c0" nameKey="name" label>
                        {PieData.map((_, index) => (
                          <Cell
                            key={"cell_" + index}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                      <RechartsLegend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Stack>
              <Row className="font-segoeui lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pr-[30px] xl:pr-[34px] 2xl:pr-[39px] 3xl:pr-[46px] w-[100%]">
                <div className="bg-blue_600 lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius3 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Scurcing
                </Text>
                <div className="bg-blue_300 lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] rounded-radius3 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Screening
                </Text>
                <div className="bg-blue_200 lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] rounded-radius3 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Interviews
                </Text>
                <div className="bg-blue_100 lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] rounded-radius3 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Offer
                </Text>
                <div className="bg-blue_51 lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] rounded-radius3 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Hire
                </Text>
              </Row>
            </Column>
            <Column className="bg-white_A700 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-actor font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Headcount By Workmode
              </Text>
              <Row className="font-segoeui justify-between ml-[4px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[98%]">
                <Text className="font-normal lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] rotate-[90deg] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Total Candidates
                </Text>
                <Stack className="lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] w-[96%]">
                  <Column className="absolute items-center justify-end py-[1px] top-[0] w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        60
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        50
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        40
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <div className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <ResponsiveContainer>
                        <LineChart data={LineData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <RechartsTooltip />
                          <RechartsLegend />
                          <RechartsLine
                            dataKey="c0"
                            type="monotone"
                            stroke="#80e5ff"
                          />
                          <RechartsLine
                            dataKey="c1"
                            type="monotone"
                            stroke="#a3a3c2"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        20
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        10
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        00
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                  </Column>
                  <Row className="absolute h-[max-content] inset-y-[0] items-end my-[auto] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] right-[4%] w-[87%]">
                    <Column className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[21%]">
                      <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[30%]"></div>
                      <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Scurcing
                      </Text>
                    </Column>
                    <Column className="items-center w-[22%]">
                      <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] w-[29%]"></div>
                      <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Screening
                      </Text>
                    </Column>
                    <Column className="items-center mb-[2px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[25%]">
                      <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] 2xl:h-[156px] 3xl:h-[187px] w-[26%]"></div>
                      <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Interviews
                      </Text>
                    </Column>
                    <Column className="mb-[2px] lg:mt-[121px] xl:mt-[138px] 2xl:mt-[156px] 3xl:mt-[187px] w-[22%]">
                      <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] w-[29%]"></div>
                      <Text className="font-semibold ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Offer
                      </Text>
                    </Column>
                    <Column className="items-center mb-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[6%]">
                      <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                      <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Hire
                      </Text>
                    </Column>
                  </Row>
                </Stack>
              </Row>
              <Text className="font-normal font-segoeui lg:ml-[227px] xl:ml-[259px] 2xl:ml-[292px] 3xl:ml-[350px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                Stage
              </Text>
            </Column>
          </Row>
          <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
            <Column className="bg-white_A700 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-actor font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Head Count By Team
              </Text>
              <Row className="font-segoeui justify-between ml-[4px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[98%]">
                <Text className="font-normal lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] rotate-[90deg] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Total Candidates
                </Text>
                <Stack className="lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] w-[96%]">
                  <div className="common-pointer absolute lg:h-[197px] xl:h-[226px] 2xl:h-[254px] 3xl:h-[304px] items-center justify-end py-[1px] top-[0] w-[100%]">
                    <ResponsiveContainer>
                      <BarChart data={BarData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <RechartsLegend />
                        <Bar dataKey="c0" fill="#66ff66" />
                        <Bar dataKey="c1" fill="#ff9933" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <Row className="absolute h-[max-content] inset-y-[0] items-end my-[auto] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] right-[4%] w-[87%]">
                    <Column className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[21%]">
                      <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[30%]"></div>
                      <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Scurcing
                      </Text>
                    </Column>
                    <Column className="items-center w-[22%]">
                      <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] w-[29%]"></div>
                      <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Screening
                      </Text>
                    </Column>
                    <Column className="items-center mb-[2px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[25%]">
                      <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] 2xl:h-[156px] 3xl:h-[187px] w-[26%]"></div>
                      <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Interviews
                      </Text>
                    </Column>
                    <Column className="mb-[2px] lg:mt-[121px] xl:mt-[138px] 2xl:mt-[156px] 3xl:mt-[187px] w-[22%]">
                      <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] w-[29%]"></div>
                      <Text className="font-semibold ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Offer
                      </Text>
                    </Column>
                    <Column className="items-center mb-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[6%]">
                      <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                      <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Hire
                      </Text>
                    </Column>
                  </Row>
                </Stack>
              </Row>
              <Text className="font-normal font-segoeui lg:ml-[227px] xl:ml-[259px] 2xl:ml-[292px] 3xl:ml-[350px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                Stage
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-actor font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Head Count By Branch
              </Text>
              <Row className="font-segoeui justify-between ml-[4px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[98%]">
                <Text className="font-normal lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] rotate-[90deg] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Total Candidates
                </Text>
                <Stack className="lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] w-[96%]">
                  <Column className="absolute items-center justify-end py-[1px] top-[0] w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        60
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        50
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        40
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        30
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        20
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        10
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        00
                      </Text>
                      <Line className="bg-gray_300 h-[1px] w-[95%]" />
                    </Row>
                  </Column>
                  <Row className="absolute h-[max-content] inset-y-[0] items-end my-[auto] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] right-[4%] w-[87%]">
                    <Column className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[21%]">
                      <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[30%]"></div>
                      <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Scurcing
                      </Text>
                    </Column>
                    <Column className="items-center w-[22%]">
                      <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] w-[29%]"></div>
                      <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Screening
                      </Text>
                    </Column>
                    <Column className="items-center mb-[2px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[25%]">
                      <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] 2xl:h-[156px] 3xl:h-[187px] w-[26%]"></div>
                      <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Interviews
                      </Text>
                    </Column>
                    <Column className="mb-[2px] lg:mt-[121px] xl:mt-[138px] 2xl:mt-[156px] 3xl:mt-[187px] w-[22%]">
                      <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] w-[29%]"></div>
                      <Text className="font-semibold ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Offer
                      </Text>
                    </Column>
                    <Column className="items-center mb-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[6%]">
                      <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                      <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Hire
                      </Text>
                    </Column>
                  </Row>
                </Stack>
              </Row>
              <Text className="font-normal font-segoeui lg:ml-[227px] xl:ml-[259px] 2xl:ml-[292px] 3xl:ml-[350px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                Stage
              </Text>
            </Column>
          </Row>
        </List>
      </Column>

      <ToastContainer />
    </>
  );
};

export default HomePagePage;
