import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import './lichchieu.css';
import KhungGio from './KhungGio';
import { AppContext } from '../../../Context/AppProvider';
function LichChieu({maPhim, tenPhim}) {
    const [data, setData] = useState([]);
const Server = useContext(AppContext);
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: `http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/api/chinhanh/getAllChiNhanh`,
            data: [],
            dataType: "json",
            success: function (response) {
                setData(response);
            }, error: function (a) {
                console.log(a);
            }
        });
    }, []);
    let b = data.map((s) => {

        return   <div key={s.maCN} className="name">
                <div style={{fontSize:20,textAlign:'center'}} className="tenchinhanh">{s.tenCN}</div>
                <KhungGio maCN={s.maCN} maPhim = {maPhim} tenPhim={tenPhim}  />
        </div>

    });
    return (
        <div>
        { b }
        </div>
    );
}

export default LichChieu;