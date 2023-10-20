import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchDataById } from "../recoil/fetchDataById";
import { useParams } from "react-router-dom";
import { getCityList } from "../recoil/getCityList";
import { editAddress } from "../recoil/editAddress";
import { useNavigate } from "react-router-dom";

function EditAddress() {
  const { addressId } = useParams();
  const cityList = useRecoilValue(getCityList);
  const currentAddress = useRecoilValue(fetchDataById(addressId));

  const [province, setProvince] = useState(currentAddress.city);
  const [districts, setDistricts] = useState(currentAddress.state);
  const [newName, setNewName] = useState(currentAddress.name);
  const [address, setAddress] = useState(currentAddress.shipping_address);
  const [phone, setPhone] = useState(currentAddress.phone);
  const [email, setEmail] = useState(currentAddress.email);
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  const handleSelectProvinceChange = (e) => {
    setProvince(e.target.value);
  };

  const handleSelectDistrictsChange = (e) => {
    setDistricts(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    editAddress(
      {
        phone: phone,
        email: email,
        name: newName,
        city: province,
        state: districts,
        shipping_address: address,
        address: address,
        zipcode: 4,
        country: "VN",
      },
      currentAddress.xid
    );
    setIsDone(true);
  };

  return (
    <div className="add-container">
      <div className="title">Trang chỉnh sửa địa chỉ</div>
      <div className="add-form">
        <form>
          <div className="add-sub-form">
            <label className="detail-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="add-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632"
                />
              </svg>
              Họ và tên
            </label>
            <input
              onChange={handleNameChange}
              value={newName}
              className="detail-input"
              placeholder={currentAddress.name}
            />
          </div>

          <div className="add-sub-form">
            <label className="detail-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="add-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Số điện thoại
            </label>
            <input
              onChange={handlePhoneChange}
              value={phone}
              className="detail-input"
              placeholder={currentAddress.phone}
            />
          </div>

          <div className="add-sub-form">
            <label className="detail-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="add-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Địa chỉ email
            </label>
            <input
              onChange={handleEmailChange}
              value={email}
              className="detail-input"
              placeholder={currentAddress.email}
            />
          </div>

          <div className="add-sub-form">
            <label className="detail-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="add-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0"
                />
              </svg>
              Tỉnh, thành phố
            </label>
            <select
              onChange={handleSelectProvinceChange}
              value={province}
              id="countries"
              className="detail-input"
            >
              <option value={currentAddress.city} hidden>
                {currentAddress.city}
              </option>
              {cityList.length > 0 ? (
                cityList.map((data) => (
                  <option value={data.name} key={data.id}>
                    {data.name}
                  </option>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </select>
          </div>

          <div className="add-sub-form">
            <label className="detail-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="add-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0"
                />
              </svg>
              Quận/huyện
            </label>
            <select
              onChange={handleSelectDistrictsChange}
              value={districts}
              id="countries"
              className="detail-input"
            >
              <option value={currentAddress.state} hidden>
                {currentAddress.state}
              </option>
              {cityList.length > 0 && province !== "" ? (
                cityList
                  .filter((data) => data.name === province)[0]
                  ?.districts.map((data) => (
                    <option key={data.id}>{data.name}</option>
                  ))
              ) : (
                <p>Loading...</p>
              )}
            </select>
          </div>

          <div className="add-sub-form">
            <label className="detail-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="add-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0"
                />
              </svg>
              Địa chỉ cụ thể
            </label>
            <input
              onChange={handleAddressChange}
              value={address}
              className="detail-input"
              placeholder={currentAddress.shipping_address}
            />
          </div>

          {isDone && <p className="done">Thông Tin cập nhật Thành Công !</p>}

          <button onClick={handleOnSubmit} className="add-button">
            Lưu thông tin
          </button>

          <button
            onClick={() => {
              navigate("/address");
            }}
            className="add-button"
          >
            Trở lại
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditAddress;
