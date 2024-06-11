import React from 'react'
import { Table, ConfigProvider } from 'antd';
import DownloadIcon from '../../../assets/SVG/Download'
import Search from '../../../assets/SVG/Search';
import Oseni from '../../../assets/MembersImage/Oseni Dan.png';
import Shofidiya from '../../../assets/MembersImage/Shofidiya.png';
import Ajayi from '../../../assets/MembersImage/Ajayi.png';
import Agbo from '../../../assets/MembersImage/Agbo.png';
import Ariyo from '../../../assets/MembersImage/Ariyo.png';
import David from '../../../assets/MembersImage/David.png';
import TestBtn from '../../Buttons/testBtn';
import SwitchButtons from '../../Buttons/switchBtn';


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

const HallReportData = () => {
  const ReportData = [
    {
      title: 'Members',
      dataIndex: 'members',
      width: 250,
      render: (text) => (
        <div style={{ display: 'flex', alignItems: 'center' }} className='cursor-pointer'>
          <image src={memberImages[text]} size="small" />
          <span style={{ marginLeft: 0, fontWeight: '400', fontFamily: "nohemi", color: '#7C7C88' }}>{text}</span>
        </div>
      ),
    },
    {
      title: 'Restored',
      dataIndex: 'restored',
      width: 400,
      render: (text) => (
        <div>
          <span className='font-300 text-[#7C7C88] font-[nohemi] cursor-pointer'>{text}</span>
        </div>
      )
    },
    {
      title: 'Converts',
      dataIndex: 'converts',
      width: 100,
      render: (text) => (
        <div>
          <span className=' font-30 text-[#7C7C88] font-[nohemi] cursor-pointer'>{text}</span>
        </div>
      )
    },
    {
      title: 'Date of Meeting',
      dataIndex: 'DateOfMeeting',
      width: 200,
      render: (text) => (
        <div>
          <span className='font-300 text-[#7C7C88] font-[nohemi] cursor-pointer'>{text}</span>
        </div>
      )
    },
  ];

  const HallReport = [
    {
      id: 1,
      members: '100',
      restored: '100',
      converts: '100',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 2,
      members: '20',
      restored: '20',
      converts: '20',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 3,
      members: '10',
      restored: '10',
      converts: '10',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 4,
      members: '15',
      restored: '15',
      converts: '15',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 5,
      members: '19',
      restored: '19',
      converts: '19',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 6,
      members: '12',
      restored: '12',
      converts: '12',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 7,
      members: '21',
      Restored: '21',
      Converts: '21',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 8,
      members: '30',
      restored: '30',
      converts: '30',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 9,
      members: '11',
      restored: '11',
      converts: '11',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    },
    {
      id: 10,
      members: '18',
      restored: '18',
      converts: '18',
      DateOfMeeting: '19th Dec 2023, 11:02am'
    }
  ]
  return (
    <div className='mt-10 mb-10'>
      <div className='mb-6'>
        <h1 className='md:text-xl text-lg'>List of Members</h1>
      </div>

      <div className='bg-[#fff] rounded-3xl px-4 py-4 border'>
        <div className='md:flex items-center justify-between py-3 px-4'>
          <div className="">
          <SwitchButtons className='px-10'/>
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
                  background: '#ffffff', // Change the background color of the table cells
                },
                fontFamily: 'nohemi',
                header: {
                  background: '#ffffff', // Change the background color of the table header
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
              columns={ReportData}
              dataSource={HallReport}
              bodySortbg
              scroll={{
                y: 500,
              }}
              tableLayout="fixed"

            />
          </div>
        </ConfigProvider>

      </div>
    </div>
  )
}

export default HallReportData
