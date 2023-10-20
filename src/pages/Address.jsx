import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { fetchAllData } from "../recoil/fetchAllData";
import "./style.css";

function Address() {
  const data = useRecoilValue(fetchAllData);
  const navigate = useNavigate();

  const handleAddAddressClick = () => {
    navigate("/add-address");
  };

  const handleEditAddressClick = (xid) => {
    navigate(`/address/${xid}`);
  };

  return (
    <div className="address-container">
      <div className="title">Danh sách địa chỉ</div>
      <div className="class1"></div>
      <div className="address-sub-container">
        <div className="box-add-square">
          <div className="box-add-round">
            <svg className="link-add" onClick={handleAddAddressClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="link-add-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </svg>
          </div>
          <button
            onClick={handleAddAddressClick}
            type="button"
            className="button-add"
          >
            Thêm mới
          </button>
        </div>
      </div>
      {data.map((item) => (
        <div key={item.xid} className="detail-inf">
          <div className="class5">
            <p className="name">Họ và tên: {item.name}</p>{" "}
            <a onClick={() => handleEditAddressClick(item.xid)}>Chỉnh sửa</a>
          </div>
          <dl className="form-display">
            <div className="address">
              <dt className="ad-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="p1-m"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Địa chỉ
              </dt>
              <dd className="ad-inf">{`${item.shipping_address} ${item.state} ${item.city}`}</dd>
            </div>
            <div className="phone">
              <dt className="phone-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="p2-m"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002..25 4.5v2.25z"
                  />
                </svg>
                Số điện thoại
              </dt>
              <dd className="phone-inf">{item.phone}</dd>
            </div>
            <div className="mail">
              <dt className="mail-display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="p3-m"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Địa chỉ email
              </dt>
              <dd className="mail-inf">{item.email}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default Address;
