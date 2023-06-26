import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Bars} from "react-loader-spinner";



export function FormKhaiBaoYTe() {
    return (
        <>
            <Formik initialValues={
                {
                    hoTen: '',
                    hoChieu: '',
                    namSinh: '',
                    gioiTinh: '',
                    quocTich: '',
                    boPhanLamViec: '',
                    congTy: '',
                    baoHiem: '0',
                    tinhThanh: '',
                    quanHuyen: '',
                    phuongXa: '',
                    soNha: '',
                    sdt: '',
                    mail: '',
                    noiTungDen: '',
                    dauHieu: [],
                    tiepXuc: [],

                }
            }
                    validationSchema={Yup.object({
                        hoTen: Yup.string().required("Bắt buộc nhập"),
                        hoChieu: Yup.string().required("Bắt buộc nhập"),
                        namSinh: Yup.number().required("Bắt buộc nhập").min(1900, 'Năm sinh không được dưới 1900'),
                        quocTich: Yup.string().required('Bắt buộc nhập'),
                        tinhThanh: Yup.string().required('Bắt buộc nhập'),
                        quanHuyen: Yup.string().required('Bắt buộc nhập'),
                        phuongXa: Yup.string().required('Bắt buộc nhập'),
                        soNha: Yup.string().required('Bắt buộc nhập'),
                        sdt: Yup.string().required('Bắt buộc nhập'),
                        mail: Yup.string().required('Bắt buộc nhập').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, 'Email không đúng định dạng'),
                    })}
                    onSubmit={(values,{setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            console.log(values)
                            toast(`${values.hoTen} đã khai báo thành công`)

                        },1000)
                    }}
            >
                {
                    ({isSubmitting}) => (


                    <div style={{padding: 100}} className="container">
                        <div className=" text-center mt-5 ">
                            <h1>Tờ Khai Y Tế</h1>
                        </div>
                        <div className="row ">
                            <div className="col-lg-7 mx-auto">
                                <div className="card mt-2 mx-auto p-4 bg-light">
                                    <div className="card-body bg-light">
                                        <div className="container">
                                            <Form id="contact-form" role="form">
                                                <div className="controls">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="form_name">Họ Tên *</label>
                                                                <Field
                                                                    id="form_name"
                                                                    type="text"
                                                                    name="hoTen"
                                                                    className="form-control"
                                                                    data-error="Firstname is required."
                                                                />
                                                                <ErrorMessage name='hoTen' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Hộ Chiếu *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="hoChieu"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                                <ErrorMessage name='hoChieu' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="form_name">Năm Sinh *</label>
                                                                <Field
                                                                    id="form_name"
                                                                    type="text"
                                                                    name="namSinh"
                                                                    className="form-control"
                                                                    data-error="Firstname is required."
                                                                />
                                                                <ErrorMessage name='namSinh' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Nam </label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="radio"
                                                                    name="gioiTinh"
                                                                    value='1'

                                                                />


                                                                <label htmlFor="form_lastname">Nữ </label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="radio"
                                                                    name="gioiTinh"
                                                                    value='0'

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="form_name">Quốc Tịch *</label>
                                                                <Field
                                                                    id="form_name"
                                                                    type="text"
                                                                    name="quocTich"

                                                                />
                                                                <ErrorMessage name='quocTich' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Bộ Phận Làm Việc
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="boPhanLamViec"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        {/*                                    <div class="col-md-6">*/}
                                                        {/*                                        <div hidden class="form-group">*/}
                                                        {/*                                            <label for="form_email">Swimming Pool Area *</label>*/}
                                                        {/*                                            <input id="form_email" type="email" name="email" class="form-control"  required="required" data-error="Valid email is required.">*/}
                                                        {/*                                        </div>*/}
                                                        {/*                                    </div>*/}
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Công ty làm việc:
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="congTy"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        {/*                                    <div class="col-md-6">*/}
                                                        {/*                                        <div hidden class="form-group">*/}
                                                        {/*                                            <label for="form_email">Swimming Pool Area *</label>*/}
                                                        {/*                                            <input id="form_email" type="email" name="email" class="form-control"  required="required" data-error="Valid email is required.">*/}
                                                        {/*                                        </div>*/}
                                                        {/*                                    </div>*/}
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_need">Có bảo hiểm y tế</label>
                                                                <Field
                                                                    name='baoHiem'
                                                                    value='1'
                                                                    type='checkbox'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className=" text-center mt-5 ">
                                                                <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Tỉnh thành
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="tinhThanh"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                                <ErrorMessage name='tinhThanh' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Quận / Huyện
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="quanHuyen"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                                <ErrorMessage name='quanHuyen' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Phường / Xã
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="phuongXa"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                                <ErrorMessage name='phuongXa' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>


                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Số nhà / tổ dân phố /
                                                                    thôn / đội
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="soNha"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                                <ErrorMessage name='soNha' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>


                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Số điện thoại
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="sdt"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                                <ErrorMessage name='sdt' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_lastname">Email
                                                                    *</label>
                                                                <Field
                                                                    id="form_lastname"
                                                                    type="text"
                                                                    name="mail"
                                                                    className="form-control"
                                                                    data-error="Lastname is required."
                                                                />
                                                                <ErrorMessage name='mail' component='span'
                                                                              class='error-message'/>
                                                            </div>
                                                        </div>


                                                        <div className="col-md-12">
                                                            <div className=" text-center mt-5 ">
                                                                <h3>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng
                                                                    lãnh thổ nào (có thể đi qua nhiều quốc gia)</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">

                                                                <Field
                                                                    component='textarea'
                                                                    type="text"
                                                                    name="noiTungDen"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className=" text-center mt-5 ">
                                                                <h3>Trong vòng 14 ngày qua, Anh/Chị có xuât hiện dấu
                                                                    hiệu nào sau đây</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <div>
                                                                    <Field
                                                                        value='Sốt'
                                                                        type="checkbox"
                                                                        name="dauHieu"
                                                                    />
                                                                    <label>Sốt </label>

                                                                </div>

                                                                <div>
                                                                    <Field
                                                                        value='Ho'
                                                                        type="checkbox"
                                                                        name="dauHieu"
                                                                    />
                                                                    <label>Ho </label>

                                                                </div>

                                                                <div>
                                                                    <Field
                                                                        value='Khó thở'
                                                                        type="checkbox"
                                                                        name="dauHieu"
                                                                    />
                                                                    <label>Khó thở </label>

                                                                </div>


                                                                <div>
                                                                    <Field
                                                                        value='Viêm phổi'
                                                                        type="checkbox"
                                                                        name="dauHieu"
                                                                    />
                                                                    <label>Đau họng </label>

                                                                </div>
                                                                <div>
                                                                    <Field
                                                                        value='Mệt mỏi'
                                                                        type="checkbox"
                                                                        name="dauHieu"
                                                                    />
                                                                    <label>Mệt mỏi </label>

                                                                </div>


                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className=" text-center mt-5 ">
                                                                <h3>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc
                                                                    với?</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <div>
                                                                    <Field
                                                                        value='Người bệnh hoạc nghi ngờ nhiễm COVID-19'
                                                                        type="checkbox"
                                                                        name="tiepXuc"
                                                                    />
                                                                    <label>Người bệnh hoạc nghi ngờ nhiễm
                                                                        COVID-19 </label>

                                                                </div>
                                                                <div>
                                                                    <Field
                                                                        value='Người từ nước ngoài về nhiễm COVID-19'
                                                                        type="checkbox"
                                                                        name="tiepXuc"
                                                                    />
                                                                    <label>Người từ nước ngoài về nhiễm
                                                                        COVID-19 </label>

                                                                </div>
                                                                <div>
                                                                    <Field
                                                                        value='Người có biểu hiện (sốt , ho , viêm phổi , khó thở)'
                                                                        type="checkbox"
                                                                        name="tiepXuc"
                                                                    />
                                                                    <label>Người có biểu hiện (sốt , ho , viêm phổi ,
                                                                        khó thở) </label>

                                                                </div>
                                                            </div>
                                                        </div>





                                                    </div>

                                                </div>
                                                {
                                                    isSubmitting ?
                                                        <Bars
                                                            height="80"
                                                            width="80"
                                                            color="#4fa94d"
                                                            ariaLabel="bars-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                            visible={true}
                                                        /> :
                                                        <div className="col-md-12">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-success btn-send  pt-2 btn-block"
                                                                defaultValue="Submit"
                                                            >Submit
                                                            </button>
                                                        </div>

                                                }
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                                {/* /.8 */}
                            </div>
                            {/* /.row*/}
                        </div>
                    </div>)

                }
            </Formik>
            <ToastContainer />

        </>
    )
}