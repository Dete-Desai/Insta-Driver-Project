import React, { useContext } from 'react';
import filterImg from '../../../../dist/icons/filterImg.png';
import { UserContext } from '../../MainBody/MainBody';

const statusMsg = [
  { value: '', label: 'Message statuses' },
  { value: 'read', label: 'Read messages' },
  { value: 'unread', label: 'Unread messages' },
  { value: 'ongoing', label: 'Ongoing discussion' },
  { value: 'ended', label: 'Ended discussion' },
]
const timeOfMsg = [
  { value: '', label: 'Time of messages' },
  { value: 'lastHour', label: 'Last hour' },
  { value: '12hrsAgo', label: '12 hrs ago' },
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This week' },
  { value: 'month', label: 'This month' },
  { value: 'year', label: 'This Year' },
]
const subjectOfMsg = [
  { value: '', label: 'Subject of Message' },
  { value: 'inquiries', label: 'All Inquiries and chat' },
  { value: 'drivingJobs', label: 'Driving jobs' },
  { value: 'nonDrivingJobs', label: 'Non-driving jobs' },
  { value: 'partnership', label: 'Looking for partnership' },
  { value: 'sellingProducts', label: 'Selling products & Services' },
  { value: 'inquiry', label: 'General inquiry' },
  { value: 'other', label: 'Other' },
]

const ChatListHeader = () => {
  const { title } = useContext(UserContext)


  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{ borderRadius: "20px" }} className="input-group w-75 bg-white">
        <input className="submit__btn" type="submit" />
        <input style={{ fontSize: "15px" }} className="form-control text-muted search__input border__focus" placeholder="Search users,messages or chat id's" type="text" />
      </div>
      <div>
        <div className="dropdown">
          <button className="btn filterStyle bg-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="ml-3" src={filterImg} alt="" />
          </button>
          <div style={{ left: "0px" }} className="dropdown-menu filterBtn" aria-labelledby="dropdownMenuButton">
            <div className="filterPopup d-flex flex-column justify-content-center align-items-center">
              <div className="filterPopup-top w-100 text-center">Filter</div>
              <form className="mt-5">
                <div className="form-group">
                  <select name="statusMsg" className="form-control srcFilter ">
                    {
                      statusMsg.map(option => <option value={option.value}>{option.label}</option>)
                    }
                  </select>
                </div>
                <div className="form-group">
                  <select name="timeOfMsg" className="form-control srcFilter">
                    {
                      timeOfMsg.map(option => <option value={option.value}>{option.label}</option>)
                    }
                  </select>
                </div>
                {
                  title === 'employer' &&
                  <div className="form-group">
                    <select name="subjectOfMsg" className="form-control srcFilter">
                      {
                        subjectOfMsg.map(option => <option value={option.value}>{option.label}</option>)
                      }
                    </select>
                  </div>
                }
                <button type="submit" className="btn chat__btn">Apply Filter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListHeader;