<template>
  <UTabs :items="items" />
</template>

<script lang="ts" setup>
let content = "";
let content1 = "";
let content2 = "";
let content3 = "";
let content4 = "";
let content5 = "";
content =
  "Chú LĂNG NGHIÊM\n" +
  "SURANGAMA SAMADHI MANTRA\n" +
  "Nam mô Lăng Nghiêm Hội thượng Phật Bồ tát. (x3)\n" +
  "Kính lạy Pháp thân, Báo thân, Ứng thân Phật\n" +
  "Thủ Lăng Nghiêm vương hiếm có trên đời.\n" +
  "Tiêu trừ cho con các vọng tưởng điên đảo từ muôn ức kiếp\n" +
  "Không cần trải qua vô số kiếp mà vẫn được Pháp thân.\n" +
  "Nguyện nay đắc quả thành Bảo vương,\n" +
  "Trở lại độ thoát chúng sanh nhiều như số cát sông Hằng.\n" +
  "Nguyện đem thân tâm này phụng sự vô số cõi,\n" +
  "Thế mới gọi là đền ơn chư Phật.\n" +
  "Cúi xin Ðức Thế Tôn chứng minh cho con,\n" +
  "Trong đời ác ngũ trược con nguyện vào trước,\n" +
  "Nếu một chúng sanh chưa thành Phật,\n" +
  "Quyết không nơi đó tự mình chứng Niết Bàn.\n" +
  "Ðức Phật là đấng đại hùng đại lực đại từ bi,\n" +
  "Cúi xin Ngài dứt trừ các hoặc vi tế cho con.\n" +
  "Khiến con mau đến Vô Thượng Giác,\n" +
  "Mười phương thế giới ngồi cõi đạo tràng.\n" +
  "Hư không kia còn có thể tiêu mất,\n" +
  "Bổn tâm kiên cố không hề lay động.\n" +
  "Nam mô thường trụ thập phương Phật.\n" +
  "Nam mô thường trụ thập phương Pháp.\n" +
  "Nam mô thường trụ thập phương Tăng.\n" +
  "Nam mô Thích Ca Mâu Ni Phật.\n" +
  "Nam mô Phật đảnh Thủ Lăng Nghiêm.\n" +
  "Nam mô Quán Thế Âm Bồ tát.\n" +
  "Nam mô Kim Cang Tạng Bồ tát.\n" +
  "Nam mô Sư phụ Kim Cang Tạng Bồ tát.\n" +
  "Bấy giờ, Thế Tôn từ nơi nhục kế phóng ra hào quang trăm báu, " +
  "trong hào quang phóng ra hoa sen báu ngàn cánh, " +
  "có Hóa thân Như Lai ngồi trong hoa sen báu. " +
  "Trên đảnh phóng mười đạo hào quang trăm báu, " +
  "mỗi mỗi đạo hào quang đều thị hiện Kim Cang Mật Tích " +
  "nhiều như số cát mười sông Hằng hà, tay đỡ núi, tay cầm chày, khắp cõi hư không. " +
  "Ðại chúng ngước lên xem, vừa kính yêu vừa lo sợ, xin Phật thương xót che chở, " +
  "nhất tâm lắng nghe đức Như Lai nơi Vô Kiến Ðảnh Tướng của Phật phóng ra hào quang tuyên thuyết Thần Chú.";

content1 =
  "01. Nam-mô tát đát tha\n" +
  "02. Tô già đa da\n" +
  "03. A ra ha đế\n" +
  "04. Tam-miệu tam bồ-đà tỏa\n" +
  "05. Nam mô tát đát tha\n" +
  "06. Phật đà cu tri sắc ni sam\n" +
  "07. Nam-mô tát bà\n" +
  "08. Bột đà bột địa\n" +
  "09. Tát đa bệ tệ\n" +
  "10. Nam-mô tát đa nẩm\n" +
  "11. Tam-miệu tam bồ đà\n" +
  "12. Cu tri nẩm\n" +
  "13. Ta xá ra bà ca\n" +
  "14. Tăng già nẩm\n" +
  "15. Nam-mô lô kê A-La-Hán đa nẩm\n" +
  "16. Nam-mô tô lô đa ba na nẩm\n" +
  "17. Nam-mô ta yết rị đà dà di nẩm\n" +
  "18. Nam-mô lô kê tam-miệu dà đa nẩm\n" +
  "19. Tam-miệu dà ba ra\n" +
  "20. Ðể ba đa na nẩm\n" +
  "21. Nam-mô đề bà ly sắc nỏa\n" +
  "22. Nam-mô tất đà da\n" +
  "23. Tỳ địa da\n" +
  "24. Ðà ra ly sắc nỏa\n" +
  "25. Xá ba noa\n" +
  "26. Yết ra ha\n" +
  "27. Ta ha ta ra ma tha nẩm\n" +
  "28. Nam-mô bạt ra ha ma ni\n" +
  "29. Nam-mô nhơn dà ra da\n" +
  "30. Nam-mô bà dà bà đế\n" +
  "31. Lô đà ra da\n" +
  "32. Ô ma bát đế\n" +
  "33. Ta hê dạ da\n" +
  "34. Nam-mô bà dà bà đế\n" +
  "35. Na ra dả\n" +
  "36. Noa da\n" +
  "37. Bàn dá ma ha tam mộđà da\n" +
  "38. Nam-mô tất yết rị đa da\n" +
  "39. Nam-mô bà dà bà đế\n" +
  "40. Ma ha ca ra da\n" +
  "41. Ðịa rị bác lặc na\n" +
  "42. Dà ra tỳ đà ra\n" +
  "43. Ba noa ca ra da\n" +
  "44. A địa mục đế\n" +
  "45. Thi ma xá na nê\n" +
  "46. Bà tất nê\n" +
  "47. Ma đát rị dà noa\n" +
  "48. Nam-mô tất yết rị đa da\n" +
  "49. Nam-mô bà dà bà đế\n" +
  "50. Ða tha dà đa câu ra da\n" +
  "51. Nam-mô bát đầu ma câu ra da\n" +
  "52. Nam-mô bạc xà ra câu ra da\n" +
  "53. Nam-mô ma ni câu ra da\n" +
  "54. Nam-mô dà xà câu ra da\n" +
  "55. Nam-mô bà dà bà đế\n" +
  "56. Ðế rị trà\n" +
  "57. Du ra tây na\n" +
  "58. Ba ra ha ra noa ra xà da\n" +
  "59. Ða tha dà đa da\n" +
  "60. Nam-mô bà dà bà đế\n" +
  "61. Nam-mô A di đa bà da\n" +
  "62. Ða tha dà đa da\n" +
  "63. A ra ha đế\n" +
  "64. Tam-miệu tam bồ đà da\n" +
  "65. Nam-mô bà dà bà đế\n" +
  "66. A sô bệ da\n" +
  "67. Ða tha dà đa da\n" +
  "68. A ra ha đế\n" +
  "69. Tam-miệu tam-bồ đà da\n" +
  "70. Nam-mô bà dà bà đế\n" +
  "71. Bệ xa xà da\n" +
  "72. Câu lô phệ trụ rị da\n" +
  "73. Bác ra bà ra xà da\n" +
  "74. Ða tha dà đa da.\n" +
  "75. Nam-mô bà dà bà đế\n" +
  "76. Tam bổ sư bí đa\n" +
  "77. Tát lân nại ra lặc xà da\n" +
  "78. Ða tha dà đa da\n" +
  "79. A ra ha đế\n" +
  "80. Tam-miệu tam-bồ đà da\n" +
  "81. Nam-mô bà dà bà đế\n" +
  "82. Xá kê dã mẫu na duệ\n" +
  "83. Ða tha dà đa da\n" +
  "84. A ra ha đế\n" +
  "85. Tam-miệu tam-bồ đà da\n" +
  "86. Nam-mô bà dà bà đế\n" +
  "87. Lặc đát na kê đô ra xà da\n" +
  "88. Ða tha dà đa da\n" +
  "89. A ra ha đế\n" +
  "90. Tam-miệu tam-bồ đà da\n" +
  "91. Ðế biều\n" +
  "92. Nam-mô tát yết rị đa\n" +
  "93. Ế đàm bà dà bà đa\n" +
  "94. Tát đác tha dà đôsắc ni sam\n" +
  "95. Tát đác đa bát đác lam\n" +
  "96. Nam-mô a bà ra thị đam\n" +
  "97. Bác ra đế\n" +
  "98. Dương kỳ ra\n" +
  "99. Tát ra bà\n" +
  "100. Bộ đa yết ra ha\n" +
  "101. Ni yết ra ha\n" +
  "102. Yết ca ra ha ni\n" +
  "103. Bạt ra bí địa da\n" +
  "104. Sất đà nể\n" +
  "105. A ca ra\n" +
  "106. Mật rị trụ\n" +
  "107. Bát rị đác ra da\n" +
  "108. Nảnh yết rị\n" +
  "109. Tát ra bà\n" +
  "110. Bàn đà na\n" +
  "111. Mục xoa ni\n" +
  "112. Tát ra bà\n" +
  "113. Ðột sắc tra\n" +
  "114. Ðột tất phạp\n" +
  "115. Bát na nể\n" +
  "116. Phạt ra ni\n" +
  "117. Giả đô ra\n" +
  "118. Thất đế nẩm\n" +
  "119. Yết ra ha\n" +
  "120. Ta ha tát ra nhã xà\n" +
  "121. Tỳ đa băng ta na yết rị\n" +
  "122. A sắc tra băng xá đế nẩm\n" +
  "123. Na xoa sát đác ra nhã xà\n" +
  "124. Ba ra tát đà na yết rị\n" +
  "125. A sắc tra nẩm\n" +
  "126. Ma ha yết ra ha nhã xà\n" +
  "127. Tỳ đa băng tát na yết rị\n" +
  "128. Tát bà xá đô lô\n" +
  "129. Nể bà ra nhã xà\n" +
  "130. Hô lam đột tất phạp\n" +
  "131. Nan giá na xá ni\n" +
  "132. Bí sa xá\n" +
  "133. Tất đác ra\n" +
  "134. A kiết ni\n" +
  "135. Ô đà ca ra nhã xà\n" +
  "136. A bát ra thị đa câu ra\n" +
  "137. Ma ha bác ra chiến trì\n" +
  "138. Ma ha điệp đa\n" +
  "139. Ma ha đế xà\n" +
  "140 Ma ha thuế đa xà bà ra\n" +
  "141. Ma ha bạt ra bàn đà ra\n" +
  "142. Bà tất nể\n" +
  "143. A rị da đa ra\n" +
  "144. Tỳ rị câu tri\n" +
  "145. Thệ bà tỳ xà da\n" +
  "146. Bạt xà ra ma lễ để\n" +
  "147. Tỳ xá lô đa\n" +
  "148. Bột đằng dõng ca\n" +
  "149. Bạt xà ra chế hắt na a giá\n" +
  "150. Ma ra chế bà\n" +
  "151. Bát ra chất đa\n" +
  "152. Bạt xà ra thiện trì\n" +
  "153. Tỳ xá ra giá\n" +
  "154. Phiến đa xá\n" +
  "155. Bệ để bà\n" +
  "156. Bổ thị đa\n" +
  "157. Tô ma lô ba\n" +
  "158. Ma ha thuế đa\n" +
  "159. A rị da đa ra\n" +
  "160. Ma ha bà ra a bác ra\n" +
  "161. Bạt xà ra thương yếtra chế bà\n" +
  "162. Bạt xà ra câu ma rị\n" +
  "163. Câu lam đà rị\n" +
  "164. Bạt xà ra hắt tát đa giá\n" +
  "165. Tỳ địa da\n" +
  "166. Kiền dá na\n" +
  "167. Ma rị ca\n" +
  "168. Khuất tô mẫu\n" +
  "169. Bà yết ra đá na\n" +
  "170. Bệ lô giá na\n" +
  "171. Câu rị da\n" +
  "172. Dạ ra thố\n" +
  "173. Sắc ni sam\n" +
  "174. Tỳ chiếc lam bà ma ni giá\n" +
  "175. Bạt xà ra ca na caba ra bà\n" +
  "176. Lồ xà na\n" +
  "177. Bạt xà ra đốn trỉ giá\n" +
  "178. Thuế đa giá\n" +
  "179. Ca ma ra\n" +
  "180. Sát sa thi\n" +
  "181. Ba ra bà\n" +
  "182. Ế đế di đế\n" +
  "183. Mẫu đà ra\n" +
  "184. Yết noa\n" +
  "185. Ta bệ ra sám\n" +
  "186. Quật phạm đô\n" +
  "187. Ấn thố na mạ mạ tỏa";

content2 =
  "188. Ô Hồng\n" +
  "189. Rị sắc yết noa\n" +
  "190. Bác lặc xá tất đa\n" +
  "191. Tát đác tha\n" +
  "192. Già đô sắc ni sam\n" +
  "193. Hổ hồng đô lô ung\n" +
  "194. Chiêm bà na\n" +
  "195. Hổ hồng đô lô ung\n" +
  "196. Tất đam bà na\n" +
  "197. Hổ hồng đô lô ung\n" +
  "198. Ba ra sắc địa da\n" +
  "199. Tam bác xoa\n" +
  "200. Noa yết ra\n" +
  "201. Hổ hồng đô lô ung\n" +
  "202. Tát bà dược xoa\n" +
  "203. Hắt ra sát ta\n" +
  "204. Yết ra ha nhã xà\n" +
  "205. Tỳ đằng băng tát na yết ra\n" +
  "206. Hổ hồng đô lô ung\n" +
  "207. Giả đô ra\n" +
  "208. Thi để nẩm\n" +
  "209. Yết ra ha\n" +
  "210. Ta ha tát ra nẩm\n" +
  "211. Tỳ đằng băng tát na ra\n" +
  "212. Hổ hồng đô lô ung\n" +
  "213. Ra xoa\n" +
  "214. Bà già phạm\n" +
  "215. Tát đác tha\n" +
  "216. Già đô sắc ni sam\n" +
  "217. Ba ra điểm\n" +
  "218. Xà kiết rị\n" +
  "219. Ma ha ta ha tát ra\n" +
  "220. Bột thọ ta ha tát ra\n" +
  "221. Thất rị sa\n" +
  "222. Câu tri ta ha tát nê\n" +
  "223. Ðế lệ a tệ đề thị bà rị đa\n" +
  "224. Tra tra anh ca\n" +
  "225. Ma ha bạt xà lô đà ra\n" +
  "226. Ðế rị bồ bà na\n" +
  "227. Man trà ra\n" +
  "228. Ô hồng\n" +
  "229. Ta tất đế\n" +
  "230. Bạt bà đô\n" +
  "231. Mạ mạ\n" +
  "232. Ấn thố na mạ mạ tỏa";

content3 =
  "233. Ra xà bà dạ\n" +
  "234. Chủ ra bạt dạ\n" +
  "235. A kỳ ni bà dạ\n" +
  "236. Ô đà ca bà dạ\n" +
  "237. Tỳ xa bà dạ\n" +
  "238. Xá tát đa ra bà dạ\n" +
  "239. Bà ra chước yết ra bà dạ\n" +
  "240. Ðột sắc xoa bà dạ\n" +
  "241. A xá nể bà dạ\n" +
  "242. A ca ra\n" +
  "243. Mật rị trụ bà dạ\n" +
  "244. Ðà ra ni bộ di kiếm\n" +
  "245. Ba già ba đà bà dạ\n" +
  "246. Ô ra ca bà đa bà dạ\n" +
  "247. Lặc xà đàn trà bà dạ\n" +
  "248. Na dà bà dạ\n" +
  "249. Tỳ điều đát bà dạ\n" +
  "250. Tô ba ra noa bà dạ\n" +
  "251. Dược xoa yết ra ha\n" +
  "252. Ra xoa tư yết ra ha\n" +
  "253. Tất rị đa yết ra ha\n" +
  "254. Tỳ xá giá yết ra ha\n" +
  "255. Bộ đa yết ra ha\n" +
  "256. Cưu bàn trà yết ra ha\n" +
  "257. Bổ đơn na yết ra ha\n" +
  "258. Ca tra bổ đơn na yết ra ha\n" +
  "259. Tất kiền độ yết ra ha\n" +
  "260. A bá tất ma ra yết ra ha\n" +
  "261. Ô đàn ma đà yết ra ha\n" +
  "262. Xa dạ yết ra ha\n" +
  "263. Hê rị bà đế yết ra ha\n" +
  "264. Xả đa ha rị nẩm\n" +
  "265. Yết bà ha rị nẩm\n" +
  "266. Lô địa ra ha rị nẩm\n" +
  "267. Mang ta ha rị nẩm\n" +
  "268. Mê đà ha rị nẩm\n" +
  "269. Ma xà ha rị nẩm\n" +
  "270. Xà đa ha rị nữ\n" +
  "271. Thị tỷ đa ha rị nẩm\n" +
  "272. Tỳ đa ha rị nẩm\n" +
  "273. Bà đa ha rị nẩm\n" +
  "274. A du giá ha rị nữ\n" +
  "275. Chất đa ha rị nữ\n" +
  "276. Ðế sam tát bệ sam\n" +
  "277. Tát bà yết ra ha nẩm\n" +
  "278. Tỳ đà dạ xà\n" +
  "279. Sân đà dạ di\n" +
  "280. Kê ra dạ di\n" +
  "281. Ba rị bạt ra giả ca\n" +
  "282. Hất rị đởm\n" +
  "283. Tỳ đà dạ xà\n" +
  "284. Sân đà dạ di\n" +
  "285. Kê ra dạ di\n" +
  "286. Trà diễn ni\n" +
  "287. Hất rị đởm\n" +
  "288. Tỳ đà dạ xà\n" +
  "289. Sân đà dạ di\n" +
  "290. Kê ra dạ di\n" +
  "291. Ma ha bát du bát đác dạ\n" +
  "292. Lô đà ra\n" +
  "293. Hất rị đởm\n" +
  "294. Tỳ đà dạ xà\n" +
  "295. Sân đà dạ di\n" +
  "296. Kê ra dạ di\n" +
  "297. Na ra dạ noa\n" +
  "298. Hất rị đởm\n" +
  "299. Tỳ đà dạ xà\n" +
  "300. Sân đà dạ di\n" +
  "301. Kê ra dạ di\n" +
  "302. Ðát đỏa dà lô trà tây\n" +
  "303. Hất rị đởm\n" +
  "304. Tỳ đà dạ xà\n" +
  "305. Sân đà dạ di\n" +
  "306. Kê ra dạ di\n" +
  "307. Ma ha ca ra\n" +
  "308. Ma đác rị già noa\n" +
  "309. Hất rị đởm\n" +
  "310. Tỳ đà dạ xà\n" +
  "311. Sân đà dạ di\n" +
  "312. Kê ra dạ di\n" +
  "313. Ca ba rị ca\n" +
  "314. Hất rị đởm\n" +
  "315. Tỳ đà dạ xà\n" +
  "316. Sân đà dạ di\n" +
  "317. Kê ra dạ di\n" +
  "318. Xà dạ yết ra\n" +
  "319. Ma độ yết ra\n" +
  "320. Tát bà ra tha ta đạt na\n" +
  "321. Hất rị đởm\n" +
  "322. Tỳ đà dạ xà\n" +
  "323. sân đà dạ di\n" +
  "324. Kê ra dạ di\n" +
  "325. Giả đốt ra\n" +
  "326. Bà kỳ nể\n" +
  "327. Hất rị đởm\n" +
  "328. Tỳ đà dạ xà\n" +
  "329. Sân đà dạ di\n" +
  "330. Kê ra dạ di\n" +
  "331. Tỳ rị dương hất rị tri\n" +
  "332. Nan đà kê sa ra\n" +
  "333. Dà noa bác đế\n" +
  "334. Sách hê dạ\n" +
  "335. Hất rị đởm\n" +
  "336. Tỳ đà dạ xà\n" +
  "337. Sân đà dạ di\n" +
  "338. Kê ra dạ di\n" +
  "339. Na yết na xá ra bà noa\n" +
  "340. Hất rị đởm\n" +
  "341. Tỳ đà dạ xà\n" +
  "342. Sân đà dạ di\n" +
  "343. Kê ra dạ di\n" +
  "344. A-la-hán\n" +
  "345. Hất rị đởm\n" +
  "346. Tỳ đà dạ xà\n" +
  "347. Sân đà dạ di\n" +
  "348. Kê ra dạ di\n" +
  "349. Tỳ đa ra dà\n" +
  "350. Hất rị đởm\n" +
  "351. Tỳ đà dạ xà\n" +
  "352. Sân đà dạ di\n" +
  "353. Kê ra dạ di\n" +
  "354. Bạt xà ra ba nể\n" +
  "355. Câu hê dạ câu hê dạ\n" +
  "356. Ca địa bát đế\n" +
  "357. Hất rị đởm\n" +
  "358. Tỳ đà dạ xà\n" +
  "359. Sân đà dạ di\n" +
  "360. Kê ra dạ di\n" +
  "361. Ra xoa vỏng\n" +
  "362. Bà dà phạm\n" +
  "363. Ấn thố na mạ mạ tỏa";

content4 =
  "364. Bà dà phạm\n" +
  "365. Tát đác đa bát đác ra\n" +
  "366. Nam-mô tý đô đế\n" +
  "367. A tất đa na ra lặc ca\n" +
  "368. Ba ra bà\n" +
  "369. Tất phổ tra\n" +
  "370. Tỳ ca tát đác đa bát đế rị\n" +
  "371. Thập Phật ra thập Phật ra\n" +
  "372. Ðà ra đà ra\n" +
  "373. Tần đà ra tần đà ra\n" +
  "374. Sân đà sân đà\n" +
  "375. Hổ hồng hổ hồng\n" +
  "376. Phấn tra phấn tra phấn tra phấn tra phấn tra\n" +
  "377. Ta ha\n" +
  "378. Hê hê phấn\n" +
  "379. A mâu ca da phấn\n" +
  "380. A ba ra đề ha da phấn\n" +
  "381. Ba ra bà ra đà phấn\n" +
  "382. A tố ra\n" +
  "383. Tỳ đà ra\n" +
  "384. Ba ca phấn\n" +
  "385. Tát bà đề bệ tệ phấn\n" +
  "386. Tát bà na dà tệ phấn\n" +
  "387. Tát bà dược xoa tệ phấn\n" +
  "388. Tát bà kiền thát bà tệ phấn\n" +
  "389. Tát bà bổ đơn na tệ phấn\n" +
  "390. Ca tra bổ đơn na tệ phấn\n" +
  "391. Tát bà đột lang chỉ đế tệ phấn\n" +
  "392. Tát bà đột sáp tỷ lê\n" +
  "393. Hất sắc đế tệ phấn\n" +
  "394. Tát bà thập bà lê tệ phấn\n" +
  "395. Tát bà a bá tất ma lê tệ phấn\n" +
  "396. Tát bà xá ra bà noa tệ phấn\n" +
  "397. Tát bà địa đế kê tệ phấn\n" +
  "398. Tát bà đát ma đà kê tệ phấn\n" +
  "399. Tát bà tỳ đà da\n" +
  "400. Ra thệ giá lê tệ phấn\n" +
  "401. Xà dạ yết ra\n" +
  "402. Ma độ yết ra\n" +
  "403. Tát bà ra tha ta đà kê tệ phấn\n" +
  "404. Tỳ địa dạ\n" +
  "405. Giá lê tệ phấn\n" +
  "406. Giả đô ra\n" +
  "407. Phược kỳ nể tệ phấn\n" +
  "408. Bạt xà ra\n" +
  "409. Câu ma rị\n" +
  "410. Tỳ đà dạ\n" +
  "411. La thệ tệ phấn\n" +
  "412. Ma ha ba ra đinh dương\n" +
  "413. Xoa kỳ rị tệ phấn\n" +
  "414. Bạt xà ra thương yết ra dạ\n" +
  "415. Ba ra trượng kỳ ra xà da phấn\n" +
  "416. Ma ha ca ra dạ\n" +
  "417. Ma ha mạt đát rị ca noa\n" +
  "418. Nam-mô ta yết rị đa da phấn\n" +
  "419. Tỷ sắc noa tỳ duệ phấn\n" +
  "420. Bột ra ha mâu ni duệ phấn\n" +
  "421. A kỳ ni duệ phấn\n" +
  "422. Ma ha yết rị duệ phấn\n" +
  "423. Yết ra đàn tri duệ phấn\n" +
  "424. Miệc đát rị duệ phấn\n" +
  "425. Lao đát rị duệ phấn\n" +
  "426. Giá văn trà duệ phấn\n" +
  "427. Yết la ra đác rị duệ phấn\n" +
  "428. Ca bát rị duệ phấn\n" +
  "429. A địa mục chất đa\n" +
  "430. Ca thi ma xá na\n" +
  "431. Bà tư nể duệ phấn\n" +
  "432. Diễn kiết chất\n" +
  "433. Tát đỏa bà tỏa\n" +
  "434. Mạ mạ ấn thố na mạ mạ tỏa";
content5 =
  "435. Ðột sắc tra chất đa\n" +
  "436. A mạt đác rị chất đa\n" +
  "437. Ô xà ha ra\n" +
  "438. Dà ba ha ra\n" +
  "439. Lô địa ra ha ra\n" +
  "440. Ta bà ha ra\n" +
  "441. Ma xà ha ra\n" +
  "442. Xà đa ha ra\n" +
  "443. Thị tỉ đa ha ra\n" +
  "444. Bạt lược dạ ha ra\n" +
  "445. Kiền đà ha ra\n" +
  "446. Bố sử ba ha ra\n" +
  "447. Phả ra ha ra\n" +
  "448. Bà tả ha ra\n" +
  "449. Bát ba chất đa\n" +
  "450. Ðột sắc tra chất đa\n" +
  "451. Lao đà ra chất đa\n" +
  "452. Dược xoa yết ra ha\n" +
  "453. Ra sát ta yết ra ha\n" +
  "454. Bế lệ đa yết ra ha\n" +
  "455. Tỳ xá giá yết ra ha\n" +
  "456. Bộ đa yết ra ha\n" +
  "457. Cưu bàn trà yết ra ha\n" +
  "458. Tất kiền đà yết ra ha\n" +
  "459. Ô đát ma đà yết ra ha\n" +
  "460. Xa dạ yết ra ha\n" +
  "461. A bá tất ma ra yết ra ha\n" +
  "462. Trạch khê cách\n" +
  "463. Trà kỳ ni yết ra ha\n" +
  "464. Rị Phật đế yết ra ha\n" +
  "465. Xà di ca yết ra ha\n" +
  "466. Xá câu ni yết ra ha\n" +
  "467. Lao đà ra\n" +
  "468. Nan địa ca yết ra ha\n" +
  "469. A lam bà yết ra ha\n" +
  "470. Kiền độ ba ni yết ra ha\n" +
  "471. Thập phạt ra\n" +
  "472. Yên ca hê ca\n" +
  "473. Trị đế dược ca\n" +
  "474. Ðát lệ đế dược ca\n" +
  "475. Giả đột thác ca\n" +
  "476. Ni đề thập phạt ra\n" +
  "477. Tỉ sam ma thập phạt ra\n" +
  "478. Bạt để ca\n" +
  "479. Tỷ để ca\n" +
  "480. Thất lệ sắc mật ca\n" +
  "481. Ta nể bát để ca\n" +
  "482. Tát bà thập phạt ra\n" +
  "483. Thất lô kiết đế\n" +
  "484. Mạt đà bệ đạt lô chế kiếm\n" +
  "485. A ỷ lô kiềm\n" +
  "486. Mục khê lô kiềm\n" +
  "487. Yết rị đột lô kiềm\n" +
  "488. Yết ra ha\n" +
  "489. Yết lam yết noa du lam\n" +
  "490. Ðản đa du lam\n" +
  "491. Hất rị dạ du lam\n" +
  "492. Mạt mạ du lam\n" +
  "493. Bạt rị thất bà du lam\n" +
  "494. Tỷ lật sắc tra du lam\n" +
  "495. Ô đà ra du lam\n" +
  "496. Yết tri du lam\n" +
  "497. Bạt tất đế du lam\n" +
  "498. Ô lô du lam\n" +
  "499. Thường dà du lam\n" +
  "500. Hắc tất đa du lam\n" +
  "501. Bạt đà du lam\n" +
  "502. Ta phòng án dà\n" +
  "503. Bát ra trượng dà du lam\n" +
  "504. Bộ đa tỷ đa trà\n" +
  "505. Trà kỳ ni\n" +
  "506. Thập bà ra\n" +
  "507. Ðà đột lô ca\n" +
  "508. Kiến đốt lô kiết tri\n" +
  "509. Bà lộ đa tỳ\n" +
  "510. Tát bát lô\n" +
  "511. Ha lăng già\n" +
  "512. Du sa đát ra\n" +
  "513. Ta na yết ra\n" +
  "514. Tỳ sa dụ ca\n" +
  "515. A kỳ ni\n" +
  "516. Ô đà ca\n" +
  "517. Mạt ra bệ ra\n" +
  "518. Kiến đa ra\n" +
  "519. A ca ra\n" +
  "520. Mật rị đốt\n" +
  "521. Ðát liểm bộ ca\n" +
  "522. Ðịa lật lặc tra\n" +
  "523. Tỷ rị sắc chất ca\n" +
  "524. Tát bà na câu ra\n" +
  "525. Tứ dẫn dà tệ\n" +
  "526. Yết ra rị dược xoa\n" +
  "527. Ðác ra sô\n" +
  "528. Mạt ra thị\n" +
  "529. Phệ đế sam\n" +
  "530. Ta bệ sam\n" +
  "531. Tất đát đa bát đác ra\n" +
  "532. Ma ha bạt xà lô\n" +
  "533. Sắc ni sam\n" +
  "534. Ma ha bát lặc trượng kỳ lam\n" +
  "535. Dạ ba đột đà\n" +
  "536. Xá dụ xà na\n" +
  "537. Biện đát lệ noa\n" +
  "538. Tỳ đà da\n" +
  "539. Bàn đàm ca lô di\n" +
  "540. Ðế thù\n" +
  "541. Bàn đàm ca lô di\n" +
  "542. Bát ra tỳ đà\n" +
  "543. Bàn đàm ca lô di\n" +
  "544. Ðát điệt tha\n" +
  "545. Án\n" +
  "546. A na lệ\n" +
  "547. Tỳ xá đề\n" +
  "548. Bệ ra\n" +
  "549. Bạt xà ra\n" +
  "550. Ðà rị\n" +
  "551. Bàn đà bàn đà nể\n" +
  "552. Bạt xà ra bán ni phấn\n" +
  "553. Hổ hồng đô lô ung phấn\n" +
  "554. Ta bà ha";
const items = [
  {
    label: "Đệ I",
    content: content1,
  },
  {
    label: "Đệ II",
    content: content2,
  },
  {
    label: "Đệ III",
    content: content3,
  },
  {
    label: "Đệ IV",
    content: content4,
  },
  {
    label: "Đệ V",
    content: content5,
  },
];
</script>

<style lang="scss" scoped></style>
