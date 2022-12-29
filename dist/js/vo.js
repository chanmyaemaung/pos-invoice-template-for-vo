const voFunctions = {
    init: function () {
        voFunctions.dateFunc();
        voFunctions.insertText();
        voFunctions.insertTableData();
    },
    insertText: function () {
        const mainTitle = document.getElementById("vo-main-title");
        const retailTitle = document.getElementById("vo-retail-title");
        const retailSubTitle = document.getElementById("vo-retail-sub_title");
        const retailAdditionTitle = document.getElementById("vo-addition-text");
        const voRemark = document.getElementById("vo-remark");

        mainTitle.textContent = voFunctions.dummyText()[0];
        retailTitle.textContent = voFunctions.dummyText()[2];
        retailSubTitle.textContent = voFunctions.dummyText()[1];
        retailAdditionTitle.textContent = voFunctions.dummyText()[3];
        voRemark.textContent = voFunctions.dummyText()[4];
    },
    dateFunc: function () {
        const now = new Date();
        const date = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const voDate = document.getElementById("vo-date");

        // Insert the date into the HTML
        voDate.innerHTML = `${date}/${month}/${year}`;
    },
    insertTableData: function () {
        const selectTableBody = document.getElementById("vo-table-data");

        // Add 8 dummy rows data
        for (let i = 0; i < 8; i++) {
            const row = document.createElement("tr");
            // add the class text-center and align-middle to the row
            row.classList.add("text-center", "align-middle");
            // first must be th row with soce="row"
            row.innerHTML = `
																	<th scope="row" class="text-center align-middle">${i + 1}</th>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																	<td class="text-center align-middle">${voFunctions.dummyText()[5]}</td>
																`;
            selectTableBody.appendChild(row);
        }
    },
    dummyText: function () {
        const dummyText = [
            "Aftersales Service - Repair Registration Form",
            "供零售商內部使用",
            "Retailer Order Reference Number (ForRetailer Internal Use)",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            "Hello",
        ];

        return dummyText;
    },
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", voFunctions.init);
} else {
    voFunctions.init();
}
