import React, { useState } from 'react'
import { Table, ConfigProvider, Modal } from 'antd';
import Oseni from '../../../assets/MembersImage/Oseni Dan.png';
import Shofidiya from '../../../assets/MembersImage/Shofidiya.png';
import Ajayi from '../../../assets/MembersImage/Ajayi.png';
import Agbo from '../../../assets/MembersImage/Agbo.png';
import Ariyo from '../../../assets/MembersImage/Ariyo.png';
import David from '../../../assets/MembersImage/David.png';
import DownloadIcon from '../../../assets/SVG/Download'
import Search from '../../../assets/SVG/Search';
import MemberInfo from '../MemberInfo/MemberInfo';

const memberImages = {
  "Oseni Daniel": Oseni,
  "Shofidiya David": Shofidiya,
  "Ajayi John": Ajayi,
  "Agbo Enoch": Agbo,
  "Ogunyebi Gbemileke": Oseni,
  "David Grace": David,
  "Olatubosun Oladotun": Ajayi,
  "Ariyo Faith": Ariyo,
  "Owonla Joshua": Shofidiya,
  "Omorotionwman Promise": Agbo
};

const HallDetailsData = () => {

  const [isMemberInfoVisible, setIsMemberInfoVisible] = useState(false);

  const showMemberDetails = (record) => {
    setSelectedMember(record);
    setIsMemberInfoVisible(true);
  };

  const handleCancel = () => {
    setIsMemberInfoVisible(false)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 250,
      key: 'name',
      render: (text) => (

        <div style={{ display: 'flex', alignItems: 'center' }} className='cursor-pointer'>
          <image src={memberImages[text]} size="small" />
          <span style={{ marginLeft: 0, fontWeight: '400', fontFamily: "nohemi", color: '#7C7C88' }}>{text}</span>
        </div>

      ),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: 400,
      render: (text) => (
        <div>
          <span className='font-300 text-[#7C7C88] font-[nohemi] cursor-pointer'>{text}</span>
        </div>
      )
    },
    {
      title: 'Level',
      dataIndex: 'level',
      width: 100,
      render: (text) => (
        <div>
          <span className=' font-30 text-[#7C7C88] font-[nohemi] cursor-pointer'>{text}</span>
        </div>
      )
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      width: 150,
      render: (text) => (
        <div>
          <span className='font-300 text-[#7C7C88] font-[nohemi] cursor-pointer'>{text}</span>
        </div>
      )
    },
    {
      title: 'Date Submitted',
      dataIndex: 'DateSubmitted',
      width: 200,
      render: (text) => (
        <div>
          <span className='font-300 text-[#7C7C88] font-[nohemi] cursor-pointer'>{text}</span>
        </div>
      )
    },
  ];
  const data = [
    {
      id: 1,
      name: "Oseni Daniel",
      department: "Chemistry",
      level: "500",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    }
    ,
    {
      id: 2,
      name: "Shofidiya David",
      department: "Microbiology",
      level: "400",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 3,
      name: "Ajayi John",
      department: "Metallurgical & Materials Engineering",
      level: "400",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 4,
      name: "Agbo Enoch",
      department: "Electrical and Electronics Engineering",
      level: "400",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 5,
      name: "Ogunyebi Gbemileke",
      department: "Industrial and Production Engineering",
      level: "400",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 6,
      name: "David Grace",
      department: "Urban and Regional Planning",
      level: "400",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 7,
      name: "Olatubosun Oladotun",
      department: "Architecture",
      level: "500",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 8,
      name: "Ariyo Faith",
      department: "Cybersecurity",
      level: "500",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 9,
      name: "Owonla Joshua",
      department: "Industrial Design (Graphics)",
      level: "500",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
    {
      id: 10,
      name: "Omorotionwman Promise",
      department: "Mechanical Engineering",
      level: "400",
      phoneNumber: "08120304050",
      DateSubmitted: "19th Dec 2024, 11:02am"
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  

  return (

    <div className='mt-10 mb-10'>
      <div className='mb-6'>
        <h1 className='md:text-xl text-lg'>List of Members</h1>
      </div>

      <div className='bg-[#fff] rounded-3xl px-4 py-4 border'>
        <div className='md:flex items-center justify-between py-3 px-4'>
          <div className='flex items-center mb-4 md:mb-0 gap-10'>
            <div className="flex items-center border-2 rounded-3xl">
              <Search />
              <input type="search" className="md:py-3 py-2 px-4 w-full rounded-3xl focus:outline-none" placeholder="Search..." />
            </div>
            <button className='text-[#32357c] border-2 border-[#32357c] px-10 rounded-3xl py-2 md:py-2'>Filter</button>
          </div>

          <div className='flex items-center'>
            <button className='flex items-center text-[#32357c] border-2 border-[#32357c] px-10 rounded-3xl py-2 md:py-3'>
              <DownloadIcon />
              <span className="ml-2">Download list</span>

            </button>
          </div>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: {
                  background: '#ffffff',
                },
                fontFamily: 'nohemi',
                header: {
                  background: '#ffffff',
                },

                borderColor: '#fff'
              },
            },
          }}
        >
          <div className='flex'>
            <Table
              className='mt-8 mx-auto relative z-0'
              id='Table'
              columns={columns}
              dataSource={data}
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    setSelectedMember(record);
                    setIsMemberInfoVisible(true);
                  },
                };
              }}
              bodySortbg
              scroll={{
                y: 500,
              }}
              tableLayout="fixed"

            />
          </div>
        </ConfigProvider>

      </div>
      <div className={`member-info ${isMemberInfoVisible ? 'visible' : ''}`}>
        <MemberInfo member={selectedMember} handleCancel={handleCancel}/>
      </div>
    </div>
  )
}

export default HallDetailsData
