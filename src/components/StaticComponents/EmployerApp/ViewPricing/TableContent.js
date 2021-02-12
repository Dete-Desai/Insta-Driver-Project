import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import YesIcon from '../../../../dist/icons/YesIcon.svg';
import NoIcon from '../../../../dist/icons/NoIcon.svg';
import './index.css';

const tHeadData = [
  { id: "TH0", price: "$0", priceYearly: "$0", discount: null, duration: "/month", ctg: "Free" },
  { id: "TH1", price: "$20", priceYearly: "$15", discount: "20", duration: "/month", ctg: "Basic" },
  { id: "TH2", price: "$70", priceYearly: "$60", discount: "70", duration: "/month", ctg: "Plus" },
  { id: "TH3", price: "$500", priceYearly: "$450", discount: "500", duration: "/month", ctg: "Enterprise" },
]

// const tBodyData = [
//   { id: "TB0", td1: "Access unverified drivers", td2: YesIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB1", td1: "Access verified drivers", td2: "On demand", td3: "30 verified drivers a month", td4: "300 verified drivers a month", td5: "Unlimited verified drivers" },
//   { id: "TB2", td1: "Vehicles you can onboard", td2: "3", td3: "15", td4: "100", td5: "Unlimited" },
//   { id: "TB3", td1: "Post driving jobs", td2: "On demand", td3: "5 Jobs a month", td4: "30 Jobs a month", td5: "300 jobs a month " },
//   { id: "TB4", td1: "Organisations you can create", td2: "3", td3: "7", td4: "15", td5: "Unlimited" },
//   { id: "TB5", td1: "Maintenance Management", td2: NoIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB6", td1: "Inspection and Issues management", td2: NoIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB7", td1: "Messaging & chat", td2: YesIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB8", td1: "To do list and track tasks", td2: NoIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB9", td1: "Create conference rooms", td2: NoIcon, td3: "7 participants per room", td4: "30 participants per room", td5: "100 participants per room", icon: true, },
//   { id: "TB10", td1: "Dynamic dashboard", td2: YesIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB11", td1: "Data, reporting and analytics", td2: NoIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB12", td1: "Create and host a business page", td2: YesIcon, td3: YesIcon, td4: YesIcon, td5: YesIcon, icon: true, },
//   { id: "TB13", td1: "List your car/items for sale on Instadriver ", td2: "On demand", td3: "3 listings a month", td4: "15 listings a month", td5: "100 listings a month", },
//   { id: "TB14", td1: "Support ", td2: "Email", td3: "Email", td4: "Chat & call", td5: "Chat & call", },
// ]


const TableContent = ({ showYearlyPrice }) => {

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            {
              tHeadData.map((data, i) =>
                <Th key={i}>
                  <div style={{ background: "#646361", borderRadius: "5px", minHeight: "160px" }} className="m-auto pb-2">
                    <div className="priceBox pt-4 pb-2 m-auto d-flex justify-content-center">
                      <div className="d-flex align-items-center">
                        {
                          !showYearlyPrice ?
                          <h1 className="text-white">{data.price}</h1>
                          :
                          <h1 className="text-white">{data.priceYearly}<small style={{ fontSize: "20px" }}><del>{data.discount}</del></small></h1>                         
                        }
                        <small className="text-white">{data.duration}</small>
                      </div>
                    </div>
                    <div style={{ height: '45px', borderRadius: "5px" }} className="bg-white mx-2 mt-3">
                      <button style={{ fontSize: "22px" }} className="btn font-weight-bold w-100">{data.ctg}</button>
                    </div>
                  </div>
                </Th>
              )
            }
          </Tr>
        </Thead>
        <Tbody
          style={{
            border: '5px solid #E1DBDB',
            boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.25)"
          }}>

          {/* {
            tBodyData.map((tbd, i) =>{
              const {td1, td2, td3, td4, td5} = tbd;
            return (

              <Tr key={i} className="border-gray">
                <Td className="ftd">{td1}</Td>
                <Td>
                  {
                    td2 !== " " && <img src={td2} alt="yes" />
                  }
                  {
                    tbd.td2 && [tbd.td2]
                  }
                </Td>
                <Td>
                  {
                    tbd.icon && <img src={YesIcon} alt="yes" />
                  }
                  {
                    tbd.td3 && [tbd.td3]
                  }
                </Td>
                <Td>
                  {
                    tbd.icon && <img src={YesIcon} alt="yes" />
                  }
                  {
                    tbd.td4 && [tbd.td4]
                  }
                </Td>
                <Td>
                  {
                    tbd.icon && <img src={YesIcon} alt="yes" />
                  }
                  {
                    tbd.td5 && [tbd.td5]
                  }
                </Td>

              </Tr>
              )}
            )
          } */}
          <Tr className="border-gray">
            <Td className="ftd">Access unverified drivers</Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Access verified drivers</Td>
            <Td>On demand</Td>
            <Td>30 verified drivers a month</Td>
            <Td>300 verified drivers a month</Td>
            <Td>Unlimited verified drivers</Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Vehicles you can onboard</Td>
            <Td>3</Td>
            <Td>15</Td>
            <Td>100</Td>
            <Td>Unlimited</Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Post driving jobs</Td>
            <Td>On demand</Td>
            <Td>5 Jobs a month</Td>
            <Td>30 Jobs a month</Td>
            <Td>300 jobs a month </Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Organisations you can create</Td>
            <Td>3</Td>
            <Td>7</Td>
            <Td>15</Td>
            <Td>Unlimited</Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Maintenance Management</Td>
            <Td><img src={NoIcon} alt="no" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Inspection and Issues management</Td>
            <Td><img src={NoIcon} alt="no" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Messaging & chat</Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">To do list and track tasks</Td>
            <Td><img src={NoIcon} alt="no" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Create conference rooms</Td>
            <Td><img src={NoIcon} alt="no" /></Td>
            <Td>7 participants per room</Td>
            <Td>30 participants per room</Td>
            <Td>100 participants per room</Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Dynamic dashboard</Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Data, reporting and analytics</Td>
            <Td><img src={NoIcon} alt="no" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Create and host a business page</Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
            <Td><img src={YesIcon} alt="yes" /></Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">List your car/items for sale on Instadriver </Td>
            <Td>On demand</Td>
            <Td>3 listings a month</Td>
            <Td>15 listings a month</Td>
            <Td>100 listings a month</Td>
          </Tr>
          <Tr className="border-gray">
            <Td className="ftd">Support</Td>
            <Td>Email</Td>
            <Td>Email</Td>
            <Td>Chat & call</Td>
            <Td>Chat & call</Td>
          </Tr>

        </Tbody>
        <Tbody>
          <Tr className="border-gray border-0">
            <Td className="border-0"></Td>
            <Td className="border-0">
              <div className="m-auto pt-2 Purchase-btn">
                <button
                  style={{ fontSize: "22px" }}
                  className="btn btn-outline-dark font-weight-bold w-100 text-black"
                >
                  Get Started
                </button>
              </div>
            </Td>
            <Td className="border-0">
              <div className="m-auto pt-2 Purchase-btn">
                <button
                  style={{ fontSize: "22px" }}
                  className="btn btn-outline-dark font-weight-bold w-100 text-black"
                >
                  Purchase
                </button>
              </div>
            </Td>
            <Td className="border-0">
              <div className="m-auto pt-2 Purchase-btn">
                <button
                  style={{ fontSize: "22px" }}
                  className="btn btn-outline-dark font-weight-bold w-100 text-black"
                >
                  Purchase
                </button>
              </div>
            </Td>
            <Td className="border-0">
              <div className="m-auto pt-2 Purchase-btn">
                <button
                  style={{ fontSize: "22px" }}
                  className="btn btn-outline-dark font-weight-bold w-100 text-black"
                >
                  Purchase
                </button>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default TableContent;