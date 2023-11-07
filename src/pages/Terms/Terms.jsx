import React, { useState, useEffect, useRef } from 'react';
import style from './Terms.module.css';
import './Terms.css';
const Terms = () => {
    return(
                <div className={`term-wrapper container py-5 `}>
                    <div className = {`terms bg-white rounded p-4 pt-5 px-5 `}>
                        <h1 align="center">Quy tắc làm việc của Ridewizard: dịch vụ đặt xe trực tuyến</h1>
                        <hr/>
                        <div>
                            <p align="center"><b>PHẦN 1. QUY ĐỊNH CHUNG</b>&nbsp;</p>

                            <p>1.1. Tài liệu này được gửi tới tất cả các cá nhân (sau đây gọi là “Khách hàng”) như một lời đề nghị chính thức của “Ridewizard: Dịch vụ đặt xe, giao hàng” (sau đây gọi là “Dịch vụ”) và chứa tất cả các điều kiện cung cấp thiết yếu của сác dịch vụ nhằm
                                mục đích đăng ký đơn đặt hàng của Khách hàng trong hệ thống phần mềm và phần cứng của Dịch vụ và cung cấp thông tin về tình trạng theo dõi đơn đặt hàng cho Khách hàng.</p>
                            <p></p>

                            <p>1.2. Theo quy định của pháp luật hiện hành của nước Cộng hòa xã hội chủ nghĩa Việt Nam, tài liệu này là một đề nghị công khai sau đây được gọi là “Quy tắc làm việc”. Đặt hàng thông qua Dịch vụ bằng bất kỳ phương pháp nào được chỉ định trong các
                                Quy tắc làm việc này sẽ được coi là sự chấp nhận, được coi là tương đương với việc ký kết hợp đồng theo các điều khoản được quy định trong đó. Quy tắc làm việc này được đăng tải trên trang web chính thức của Dịch vụ https://www.ridewizard.pro.</p>
                            <p></p>

                            <p>1.3. Bằng cách chấp nhận các điều khoản của Quy tắc làm việc này, Khách hàng cũng đồng ý với Chính sách bảo mật của Dịch vụ, liên quan đến việc xử lý dữ liệu cá nhân được đăng tại&nbsp;<a href="https://ridewizard.pro/term/policy-client/">https://ridewizard.pro/term/policy-client/</a>.</p>
                            <p></p>

                            <p>1.4. Khách hàng phải đọc kỹ văn bản của các Quy tắc làm việc này. Nếu Khách hàng không đồng ý với bất kỳ điều khoản nào đó, khách hàng có thể vui lòng từ chối sử dụng dịch vụ.</p>
                            <p></p>

                            <p>1.5. Các thuật ngữ và định nghĩa được sử dụng để đáp ứng các điều kiện của Quy tắc làm việc này:</p>
                            <p></p>

                            <p>1.5.1. “Dịch vụ” có nghĩa là các dịch vụ thông tin tập trung vào việc nhận, xử lý và truyền đơn đặt hàng của Khách hàng đến Đối tác và thông báo trạng thái theo dõi đơn đặt hàng cho Khách hàng. Khách hàng có thể đặt các dịch vụ bao gồm, nhưng
                                không giới hạn: vận chuyển hành khách và hành lý, giao và vận chuyển hàng hóa. Dịch vụ không cung cấp cho Khách hàng các dịch vụ vận chuyển hành khách và hành lý cũng như bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa. Thanh
                                toán từ tài khoản cá nhân của Khách hàng được khấu trừ thay cho Đối tác dưới dạng phí cho các dịch vụ do Đối tác cung cấp cho Khách hàng;</p>
                            <p></p>

                            <p>1.5.2. “Đơn đặt hàng” có nghĩa là đơn đặt hàng được hệ thống xử lý cho các dịch vụ do Đối tác cung cấp;</p>
                            <p></p>

                            <p>1.5.3. “Đối tác” có nghĩa là một doanh nghiệp, một tập thể hoặc một người tự mình cung cấp các dịch vụ vận chuyển hành khách và hành lý và / hoặc bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa cho Khách hàng;</p>
                            <p></p>

                            <p>1.5.4. “Hồ sơ” có nghĩa là một trang trong trang web chính thức của Dịch vụ, chứa số liệu thống kê về phạm vi dịch vụ do Đối tác cung cấp và trạng thái hiện tại của tài khoản cá nhân của Khách hàng;
                            </p>
                            <p></p>

                            <p>1.5.5. “Khách hàng” có nghĩa là một người đặt hàng cho một dịch vụ vận chuyển hành khách và hành lý và / hoặc bất kỳ dịch vụ nào khác, bao gồm cả việc giao và vận chuyển hàng hóa thông qua Dịch vụ;</p>
                            <p></p>

                            <p>1.5.6. “Lộ trình” có nghĩa là tuyến đường xe chạy giữa điểm khởi hành và điểm đến;</p>
                            <p></p>

                            <p>1.5.7. “Đơn đặt trước” có nghĩa là đơn đặt hàng cho các dịch vụ vận chuyển hành khách và hành lý và bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa, được chấp nhận trước tối thiểu sáu mươi (60) phút và giả định khả năng xe đến
                                vào thời điểm do Khách hàng chỉ định;
                            </p>
                            <p></p>

                            <p>1.5.8. “Đơn hàng hiện tại” có nghĩa là đơn hàng giả định rằng xe đến “càng sớm càng tốt”;</p>
                            <p></p>

                            <p>1.5.9. “Ứng dụng di động” có nghĩa là một chương trình máy tính được cài đặt trên thiết bị di động của Khách hàng và được tích hợp vào hệ thống phần mềm và phần cứng, cho phép tự động hóa quy trình đặt hàng trực tuyến.</p>
                            <p></p>

                            <p></p>
                            <p>&nbsp;</p>

                            <p align="center"><b>PHẦN 2. CHỦ THỂ CỦA
                    QUY TẮC CÔNG VIỆC</b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>2.1. Dịch vụ sẽ cung cấp cho Khách hàng miễn phí các Dịch vụ nhằm mục đích nhập đơn đặt hàng vào hệ thống phần mềm và phần cứng và thông báo cho Khách hàng về việc thực hiện đơn đặt hàng. Dịch vụ không phải là một công ty vận tải hoặc chuyển phát,
                                nó sẽ không cung cấp cho Khách hàng các dịch vụ vận chuyển hành khách và hành lý cũng như bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa với tư cách là nhà điều hành chuyển đơn đặt hàng cho Đối tác.</p>
                            <p></p>

                            <p></p>
                            <p>&nbsp;</p>

                            <p align="center"><b>MỤC</b><b> 3. </b><b>THỦ</b><b> </b><b>TỤC</b><b> </b><b>BIỆN</b><b> </b><b>GIẢI</b><b> </b><b>DỊCH</b><b> </b><b>VỤ</b><b></b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>3.1. Khách hàng sẽ chấp nhận các điều khoản của Quy tắc làm việc này bằng cách liên hệ với Dịch vụ để đặt xe bằng bất kỳ phương tiện nào có sẵn.</p>
                            <p></p>

                            <p>3.2. Khách hàng phải chịu trách nhiệm về nội dung và độ tin cậy của thông tin được cung cấp khi đặt hàng.</p>
                            <p></p>

                            <p>3.3. Sau khi đặt hàng, dữ liệu của Khách hàng được đăng ký trong Cơ sở dữ liệu của Dịch vụ. Dữ liệu của Khách hàng sẽ không được thay đổi hoặc sửa đổi mà không có sự đồng ý của họ.</p>
                            <p></p>

                            <p>3.4. Dịch vụ sẽ đặt hàng trong hệ thống phần mềm và phần cứng trên cơ sở miễn phí đồng thời cấp quyền truy cập vào hệ thống phần mềm và phần cứng cho Đối tác sẽ chọn đơn đặt hàng và thông báo cho Dịch vụ về lựa chọn của mình, nêu rõ thời gian
                                đến cho đơn hàng đã chọn. Do đó, Dịch vụ sẽ chỉ đảm bảo việc nhập đơn đặt hàng vào hệ thống phần mềm và phần cứng. Đối tác sẽ chịu trách nhiệm vận chuyển hành khách và hành lý và bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng
                                hóa.
                            </p>
                            <p></p>

                            <p>3.5. Dịch vụ sẽ thông báo cho Khách hàng về việc phương tiện đến, nêu rõ các chi tiết bắt buộc của Đối tác và phương tiện của họ theo yêu cầu của các quy tắc và quy định liên quan.</p>
                            <p></p>

                            <p>3.6. Dịch vụ có thể chấp nhận các đơn đặt trước cho việc cung cấp phương tiện. Việc phương tiện đến kịp thời thuộc trách nhiệm của Đối tác đã được Dịch vụ thông báo trước về Dịch vụ đơn đặt trước. Tuy nhiên, việc phương tiện đến sẽ không được
                                đảm bảo.</p>
                            <p></p>

                            <p>3.7. Dịch vụ có quyền từ chối cung cấp Dịch vụ cho Khách hàng không đồng ý với các điều khoản của Quy tắc làm việc này mà không cần giải thích lý do từ chối.</p>
                            <p></p>

                            <p>3.8. Các cuộc điện thoại giữa Khách hàng và Dịch vụ sẽ được ghi lại cho việc kiểm soát nội bộ các hoạt động của Dịch vụ và kiểm soát chất lượng việc thực hiện đơn đặt hàng.</p>
                            <p></p>

                            <p>3.9. Để cải thiện chất lượng dịch vụ được cung cấp, cũng như đảm bảo sự tương tác trong thời gian thực giữa Khách hàng và Đối tác, Khách hàng có thể thông báo cho Dịch vụ về các trường hợp Đối tác vi phạm quyền của Khách hàng bằng cách sử dụng
                                biểu mẫu phản hồi điện tử hoặc bằng văn bản tại địa điểm của Dịch vụ. Trong trường hợp này, Dịch vụ sẽ thông báo cho Đối tác về khiếu nại nhận được từ Khách hàng, chia sẻ số điện thoại của Khách hàng cho Đối tác, cũng như nội dung khiếu nại
                                của Khách hàng. Giải quyết xung đột sau đó sẽ được thực hiện giữa Khách hàng và Đối tác mà không có sự tham gia của Dịch vụ. Nội dung của Điều khoản này sẽ không và không được coi là sự chấp nhận của Dịch vụ đối với bất kỳ nghĩa vụ bồi thường
                                thiệt hại nào bằng hiện vật hoặc tiền mặt, bồi thường và / hoặc được Dịch vụ chấp nhận các nghĩa vụ khác không được quy định trong Quy tắc làm việc này.</p>
                            <p></p>

                            <p>3.10. Khi thu thập và xử lý dữ liệu của Khách hàng, Dịch vụ sẽ được hướng dẫn bởi luật pháp của nước Cộng hòa xã hội chủ nghĩa Việt Nam, cũng như Chính sách quyền riêng tư của Dịch vụ về việc xử lý dữ liệu bảo mật.</p>
                            <p></p>

                            <p>3.11. Nếu Khách hàng có bất kỳ câu hỏi nào liên quan đến các tính năng của dịch vụ, Khách hàng cần tham khảo ý kiến của chuyên gia Dịch vụ trước khi đặt hàng.</p>
                            <p></p>

                            <p><b></b></p>
                            <p><b>&nbsp;</b></p><b></b>

                            <p align="center"><b>PHẦN 4. TRÁCH NHIỆM
                    CỦA DỊCH VỤ</b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>4.1. Dịch vụ sẽ tạo đơn đặt hàng của Khách hàng miễn phí trong hệ thống phần mềm và phần cứng và thông báo cho Khách hàng về việc thực hiện đơn hàng.</p>
                            <p></p>

                            <p>4.2. Dịch vụ sẽ thông báo cho Khách hàng về các trường hợp buộc phải trì hoãn đơn hàng.</p>
                            <p></p>

                            <p>4.3. Dịch vụ sẽ thông báo cho Khách hàng về các trường hợp không thể cung cấp đơn đặt hàng.</p>
                            <p></p>

                            <p>4.4. Dịch vụ sẽ kịp thời phát hiện và ngăn chặn các nỗ lực truy cập trái phép vào thông tin do Khách hàng cung cấp và / hoặc việc chuyển giao thông tin đó cho những người không liên quan trực tiếp đến việc thực hiện lệnh.</p>
                            <p></p>

                            <p><b></b></p>
                            <p><b>&nbsp;</b></p><b></b>

                            <p align="center"><b>PHẦN 5. TRÁCH NHIỆM
                    CỦA KHÁCH HÀNG</b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>5.1. Khách hàng sẽ đặt dịch vụ có dự tính đến thời gian cần thiết để thực hiện đơn hàng.</p>
                            <p></p>

                            <p>5.2. Khách hàng phải cung cấp số điện thoại, thời gian và địa chỉ của mình để thực hiện đơn hàng, loại phương tiện, lộ trình chuyến đi, điều kiện vận chuyển hoặc giao hàng cần thiết.</p>
                            <p></p>

                            <p>5.3. Khách hàng sẽ sử dụng phương tiện được cung cấp cho mục đích đã định.</p>
                            <p></p>

                            <p>5.4. Khách hàng phải giữ phương tiện sạch sẽ và gọn gàng trong suốt tuyến đường.</p>
                            <p></p>

                            <p></p>
                            <p>&nbsp;</p>

                            <p align="center"><b>PHẦN 6. THỎA THUẬN THANH TOÁN GIỮA KHÁCH HÀNG VÀ ĐỐI TÁC</b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>6.1. Dịch vụ sẽ cung cấp Dịch vụ miễn phí cho Khách hàng, đối tượng của Dịch vụ được xác định bởi các Quy tắc làm việc này.</p>
                            <p></p>

                            <p>6.2. Việc thanh toán cho việc cung cấp các dịch vụ vận chuyển hành khách và hành lý cũng như bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa sẽ được thực hiện trực tiếp giữa Khách hàng và Đối tác. Dịch vụ sẽ thông báo cho Khách
                                hàng về chi phí của dịch vụ được cung cấp. Chi phí cụ thể sẽ được tính dựa trên tỷ lệ áp dụng của Đối tác đã chấp nhận đơn đặt hàng để thực hiện. Việc thông báo cho Khách hàng về chi phí cuối cùng của các dịch vụ sẽ không có nghĩa và có thể
                                không được xem như một thực tế rằng các dịch vụ vận chuyển hành khách và hành lý cũng như bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa được cung cấp bởi Dịch vụ.
                            </p>
                            <p></p>

                            <p>6.3. Hình thức thanh toán cho việc cung cấp dịch vụ vận chuyển hành khách và hành lý và bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa sẽ do Khách hàng và Đối tác trực tiếp thỏa thuận mà không có sự tham gia của Dịch vụ.</p>
                            <p></p>

                            <p>6.4. Dịch vụ sẽ không cung cấp cho Khách hàng và Đối tác bất kỳ hướng dẫn nào về hình thức và thủ tục thanh toán cho các dịch vụ được cung cấp để vận chuyển hành khách và hành lý cũng như bất kỳ dịch vụ nào khác, bao gồm cả giao và hàng hóa.</p>
                            <p></p>

                            <p>6.5. Dịch vụ sẽ cung cấp khả năng kỹ thuật để Khách hàng thanh toán các dịch vụ vận chuyển hành khách và hành lý và bất kỳ dịch vụ nào khác, bao gồm cả việc giao và vận chuyển hàng hóa bằng các hình thức sau:</p>
                            <p></p>

                            <p>6.5.1. Thanh toán bằng tiền mặt.</p>
                            <p></p>

                            <p>6.6. Nếu Khách hàng thay đổi phạm vi dịch vụ được yêu cầu đối với việc vận chuyển hành khách và hành lý và bất kỳ dịch vụ nào khác, bao gồm cả giao và vận chuyển hàng hóa (thay đổi tuyến đường, cung cấp cho Khách hàng các dịch vụ trả phí bổ sung
                                của Đối tác, v.v...), chi phí sẽ được tính toán lại. Đơn đặt hàng sẽ được Khách hàng thanh toán phù hợp với phạm vi dịch vụ thực sự được cung cấp.</p>
                            <p></p>

                            <p>6.7 Đối tác sẽ có quyền thiết lập chi phí cho việc cung cấp các dịch vụ bổ sung cho Khách hàng, bao gồm:</p>
                            <p></p>

                            <p>6.7.1. Chờ đợi hơn khoảng thời gian đã định kể từ thời điểm Khách hàng được thông báo về việc xe đã đến;</p>
                            <p></p>

                            <p>6.7.2. Vận chuyển hành lý quá khổ.</p>
                            <p></p>

                            <p>6.8. Đối tác sẽ có quyền áp dụng hình phạt đối với việc Khách hàng từ chối chuyến đi sau khi xe đã đến địa chỉ do Khách hàng chỉ định. Số tiền phạt sẽ do Đối tác xác định.</p>
                            <p></p>

                            <p>6.9. Dịch vụ sẽ thông báo cho Khách hàng về mức giá do Đối tác thiết lập đối với việc cung cấp các dịch vụ bổ sung và mức phạt. Đồng thời, việc thanh toán cung cấp dịch vụ bổ sung, thanh toán tiền phạt sẽ được thực hiện trực tiếp cho Đối tác theo
                                hình thức do Khách hàng và Đối tác thỏa thuận.</p>
                            <p></p>

                            <p>6.10. Dịch vụ không phải là người thụ hưởng và sẽ không nhận được bất kỳ lợi nhuận nào từ các khoản thanh toán của Khách hàng. </p>
                            <p></p>

                            <p>6.11. Dịch vụ sẽ là khách hàng của các dịch vụ quảng bá sản phẩm của mình (“Ridewizard: Dịch vụ đặt xe, giao hàng”) và Đối tác sẽ là nhà kí kết quảng bá sản phẩm của khách hàng. Trong mối quan hệ này, Đối tác sẽ miễn phí chuyên chở hoặc vận chuyển
                                với chi phí giảm với chi phí của Dịch vụ. Số tiền cho chuyến đi sẽ được khấu trừ từ tài khoản cá nhân của Đối tác được mở trong Dịch vụ.</p>
                            <p></p>

                            <p>6.12. Dịch vụ sẽ là nhà cung cấp Dịch vụ cấp phép truy cập vào cơ sở dữ liệu (trên cơ sở giấy phép không độc quyền) cho Đối tác. Kinh phí cho việc cấp phép sẽ được khấu trừ từ tài khoản cá nhân của Đối tác được mở trong Dịch vụ.</p>
                            <p></p>

                            <p>6.13. Số dư dương trong tài khoản cá nhân của Đối tác sẽ được coi là khoản nợ của Dịch vụ đối với Đối tác.</p>
                            <p></p>

                            <p>6.14. Số dư âm trong tài khoản cá nhân của Đối tác sẽ được coi là khoản nợ của Đối tác đối với Dịch vụ cho các Dịch vụ do đối tác cung cấp.</p>
                            <p></p>

                            <p>6.15. Đối tác sẽ là một tổ chức kinh tế độc lập và anh ấy / cô ấy chịu trách nhiệm duy nhất và hoàn toàn liên quan đến các vấn đề về thuế và bảo hiểm.</p>
                            <p></p>

                            <p><b></b></p>
                            <p><b>&nbsp;</b></p><b></b>

                            <p align="center"><b>PHẦN 7. TRÁCH NHIỆM PHÁP LÝ CỦA CÁC BÊN</b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>7.1. Các bên sẽ chịu trách nhiệm về việc không thực hiện các nghĩa vụ của mình theo quy định của luật pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam.</p>
                            <p></p>

                            <p>7.2. Dịch vụ sẽ không chịu trách nhiệm về bất kỳ sự gián đoạn nào trong việc cung cấp Dịch vụ trong trường hợp có lỗi phần mềm hoặc phần cứng không thuộc Dịch vụ.</p>
                            <p></p>

                            <p>7.3. Dịch vụ sẽ không chịu trách nhiệm về sự gián đoạn hoàn toàn hoặc một phần trong việc cung cấp Dịch vụ liên quan đến việc thay thế phần cứng, phần mềm hoặc thực hiện các công việc khác cần thiết để duy trì khả năng hoạt động và phát triển
                                các phương tiện kỹ thuật của Dịch vụ.</p>
                            <p></p>

                            <p>7.4. Dịch vụ sẽ không chịu trách nhiệm về những thiệt hại trực tiếp, lợi nhuận bị mất mà Khách hàng phải gánh chịu do việc sử dụng Dịch vụ.</p>
                            <p></p>

                            <p>7.5. Dịch vụ sẽ không chịu trách nhiệm về việc Đối tác không thực hiện nghĩa vụ của mình.</p>
                            <p></p>

                            <p><b></b></p>
                            <p><b>&nbsp;</b></p><b></b>

                            <p align="center"><b>PHẦN 8. GIẢI QUYẾT TRANH CHẤP</b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>8.1. Các bên sẽ giải quyết các tranh chấp và bất đồng liên quan đến các Quy tắc làm việc này thông qua thương lượng.</p>
                            <p></p>

                            <p>8.2. Trường hợp không giải quyết được thông qua thương lượng thì tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền theo quy định của pháp luật hiện hành của nước Cộng hòa xã hội chủ nghĩa Việt Nam.</p>
                            <p></p>

                            <p><b></b></p>
                            <p><b>&nbsp;</b></p><b></b>

                            <p align="center"><b>PHẦN 9. ĐIỀU KHOẢN ĐẶC BIỆT</b></p>
                            <p><b></b></p><b></b>

                            <p align="center"></p>
                            <p>&nbsp;</p>

                            <p>9.1. Bằng cách đồng ý với các điều khoản của Quy tắc làm việc này, Khách hàng thể hiện sự đồng ý của mình để nhận thông tin, cũng như thông tin quảng cáo (bao gồm các ứng dụng nhắn tin trên mạng xã hội) được phân phối qua mạng di động cho mục
                                đích và trong trường hợp cần thiết, sự đồng ý này được quy định bởi luật quảng cáo Việt Nam hiện hành.</p>
                            <p></p>

                            <p>9.2. Bằng cách đồng ý với các điều khoản của Quy tắc làm việc này, Khách hàng cũng thể hiện sự đồng ý của mình đối với các điều khoản và điều kiện đặc biệt được đề cập dưới đây liên quan đến các dịch vụ giao và vận chuyển hàng hóa:</p>
                            <p></p>

                            <p>9.2.1. Các mặt hàng sau đây bị nghiêm cấm giao hàng: các mặt hàng dễ vỡ (bao gồm hoa, bánh) cần xử lý đặc biệt; các mặt hàng dễ hư hỏng; các vật dụng nguy hiểm, dễ nổ, dễ cháy và không an toàn (bao gồm cả bộ sạc dự phòng); vật phẩm, tài liệu có
                                giá trị; thẻ tín dụng hoặc thẻ ghi nợ; Các chất bất hợp pháp; động vật và thực vật sống; bất kỳ vật phẩm nào không đóng gói / rời có thể dễ bị hư hỏng trong quá trình vận chuyển; hàng giả, hàng nhái; động vật (sống hoặc cách khác); vàng thỏi,
                                tiền tệ với bất kỳ mệnh giá nào, tem / nhãn thuế, hình thức ghi tên hoặc công cụ chuyển nhượng, kim loại quý / đá; vũ khí thật hoặc giả bao gồm súng cầm tay hoặc các bộ phận của chúng, chất nổ hoặc đạn dược; hài cốt người hoặc bộ phận cơ thể;
                                tài liệu khiêu dâm.</p>
                            <p></p>

                            <p>9.2.2. Đối tác sẽ hợp tác liên quan đến bất kỳ cuộc điều tra tội phạm nào được yêu cầu và để hỗ trợ Dịch vụ tuân thủ mọi cuộc điều tra nội bộ, hướng dẫn từ các cơ quan có thẩm quyền hoặc các yêu cầu của luật hoặc quy định hiện hành tại chỗ. Đối
                                tác có quyền từ chối giao hàng nếu mặt hàng giao hàng thuộc các loại được liệt kê tại đoạn 9.2.1 ở trên. Đối tác cũng sẽ chịu hoàn toàn trách nhiệm và trách nhiệm pháp lý đối với tất cả những mất mát hoặc thiệt hại mà bản thân, bất kỳ Khách
                                hàng, Dịch vụ hoặc bất kỳ bên thứ ba nào phải gánh chịu do bất kỳ hành vi vi phạm Quy tắc làm việc này.</p>
                            <p></p>

                            <p>9.3. Khách hàng tuyên bố và đảm bảo rằng:</p>
                            <p></p>

                            <p>9.3.1. Anh ấy / cô ấy là chủ sở hữu hoặc đại diện được ủy quyền của chủ sở hữu mặt hàng giao hàng và anh ấy / cô ấy được ủy quyền để chấp nhận và anh ấy / cô ấy chấp nhận các Quy tắc làm việc này cho chính mình hoặc với tư cách là người đại diện
                                và thay mặt cho chủ sở hữu của mặt hàng giao hàng;</p>
                            <p></p>

                            <p>9.3.2. Anh / cô ấy có trách nhiệm đảm bảo rằng các chi tiết giao hàng (ví dụ: tên người nhận, chi tiết liên hệ và địa chỉ giao hàng) do anh ấy / cô ấy nhập là chính xác và đầy đủ. Dịch vụ sẽ không chịu trách nhiệm trong trường hợp giao hàng chậm
                                trễ hoặc không giao các mặt hàng giao hàng do Khách hàng đã nhập sai chi tiết giao hàng;
                            </p>
                            <p></p>

                            <p>9.3.3. Anh / cô ấy được người nhận ủy quyền hợp lệ cung cấp thông tin chi tiết của người nhận (ví dụ: tên, chi tiết liên hệ và địa chỉ giao hàng) cho Dịch vụ và Đối tác;</p>
                            <p></p>

                            <p>9.3.4. Mô tả và chi tiết cụ thể của mặt hàng giao hàng mà anh ấy / cô ấy cung cấp là chính xác và đầy đủ. Trước khi bắt đầu giao hàng, anh ấy / cô ấy phải thông báo cho Đối tác về bất kỳ biện pháp phòng ngừa cụ thể nào cần được áp dụng để xử lý
                                mặt hàng giao theo đúng bản chất của nó;</p>
                            <p></p>

                            <p>9.3.5. Mặt hàng giao hàng tuân thủ tất cả các luật và quy định hiện hành liên quan đến tính chất, tình trạng, đóng gói, xử lý, bảo quản và vận chuyển của mặt hàng giao hàng và mặt hàng giao hàng không hoặc không mang tính chất, theo bất kỳ cách
                                thức hoặc điều kiện nào: (a) không tuân thủ hoặc bị cấm bởi bất kỳ luật hoặc quy định hiện hành nào; (b) nguy hiểm; (c) dễ bị suy giảm chất lượng; (d) dễ cháy; (e) chứa chất nổ; (f) ăn mòn; (g) chứa chất phóng xạ; (h) bị cấm dựa trên các điều
                                khoản quy định trong Hiệp định khung ASEAN về tạo điều kiện thuận lợi cho hàng hóa quá cảnh (bao gồm cả Nghị định thư số 9); và / hoặc (i) do các cơ quan hữu quan khác quy định;</p>
                            <p></p>

                            <p>9.4. Dịch vụ và / hoặc Đối tác có quyền mở và kiểm tra mặt hàng giao hàng mà không cần thông báo trước cho Khách hàng dựa trên bất kỳ nghi ngờ hợp lý nào rằng mặt hàng giao hàng có thể chứa hoặc cấu thành các mặt hàng không tuân thủ hoặc bị cấm
                                như được đề cập trong các điều khoản nêu trên ở đây và Dịch vụ và / hoặc Đối tác có quyền từ chối nhận và giao mặt hàng giao đó;</p>
                            <p></p>

                            <p>9.5. Vật phẩm giao nhận được khách hàng tự mình đóng gói, chuẩn bị đúng và đủ, đóng gói, xếp gọn, dán nhãn và đánh dấu theo cách thức phù hợp với bất kỳ hoạt động hoặc giao dịch nào ảnh hưởng đến vật phẩm giao hàng và các đặc tính của vật phẩm
                                giao hàng;
                            </p>
                            <p></p>

                            <p>9.6. Sau khi món hàng giao hàng được giao, anh ấy/ cô ấy hoàn toàn phải chịu trách nhiệm đối với việc giao hàng chậm trễ hoặc mất mát, hư hỏng, nhiễm bẩn, bẩn hoặc bị giam giữ liên quan đến mặt hàng giao hàng có hay không trực tiếp hoặc gián tiếp
                                do anh ấy / cô ấy hoặc bất kỳ người nhận hàng hóa nào gây ra (hoặc bất kỳ người nào đóng vai trò là người phục vụ, đại diện hoặc nhà kí kết độc lập hoặc thay mặt cho anh ấy / cô ấy hoặc người nhận);</p>
                            <p></p>

                            <p>9.7. Theo nguyên tắc chung, anh ấy / cô ấy sẽ không có quyền hủy đặt đơn của mình sau khi đã nhận được xác nhận tương tự. Nếu người đó hủy đặt đơn của mình sau khi đã được xác nhận, người đó vẫn có trách nhiệm thanh toán đầy đủ phí đặt giao hàng.
                                Anh ấy / cô ấy vẫn có trách nhiệm thanh toán đầy đủ phí đặt giao hàng trong trường hợp người nhận mà anh / cô ấy chỉ định không thể liên lạc được hoặc không thể liên lạc được sau năm (5) phút kể từ khi Đối tác đến địa điểm giao hàng đã chỉ
                                định. Dịch vụ và Đối tác sẽ có quyền không tiến hành đơn đặt hàng của mình trong các trường hợp sau: (a) khi địa điểm giao hàng được yêu cầu nằm ngoài khu vực giao hàng được cung cấp; (b) không liên lạc được với anh ấy / cô ấy qua điện thoại
                                hoặc các phương tiện khác tại thời điểm xác nhận đặt hàng; (c) không thực hiện được đơn đặt hàng của mình do thiếu thông tin, chỉ dẫn hoặc ủy quyền của họ tại thời điểm giao hàng; hoặc (d) người nhận mà anh ấy / cô ấy chỉ định không thể liên
                                lạc được hoặc không thể liên lạc được sau năm (5) phút kể từ khi Đối tác đến địa điểm giao hàng được chỉ định.</p>
                            <p></p>

                            <p>9.8. Khách hàng đồng ý chịu hoàn toàn trách nhiệm và trách nhiệm pháp lý đối với tất cả những mất mát hoặc thiệt hại mà bản thân, Đối tác, Dịch vụ hoặc bất kỳ bên thứ ba nào phải gánh chịu do bất kỳ hành vi vi phạm Quy tắc làm việc này.</p>
                            <p></p>

                            <p>9.9. Dịch vụ có thể sửa đổi các Quy tắc làm việc này bất kỳ lúc nào. Các sửa đổi đó sẽ có hiệu lực sau khi chúng được đăng trên trang web chính thức của Dịch vụ&nbsp;<a href="https://www.ridewizard.pro/">https://www.ridewizard.pro</a>. Khách hàng
                                có trách nhiệm xem xét lại các Quy tắc làm việc này một cách thường xuyên. Việc Khách hàng tiếp tục sử dụng Dịch vụ sau bất kỳ sửa đổi nào như vậy, cho dù các sửa đổi này có được xem xét lại bởi khách hàng hay không, sẽ thiết lập sự đồng ý
                                của Khách hàng bị ràng buộc bởi các sửa đổi đó.</p>
                            <p></p>
                        </div>
                    </div>
                </div>
    )
}

export default Terms;