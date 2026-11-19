

document.getElementById("addContactbtn").addEventListener("click", function () {
    const contacts=[];
    Swal.fire({
        title: "Add New Contact",
        html: `
      <input id="swal-name" class="swal2-input" placeholder="Full Name">
      <input id="swal-phone" class="swal2-input" placeholder="Phone Number" type="tel">
      <input id="swal-address" class="swal2-input" placeholder="Address">
      <input id="swal-company" class="swal2-input" placeholder="Company">
    `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Save Contact",
        preConfirm: () => {
            const name = document.getElementById("swal-name").value.trim();
            const phone = document.getElementById("swal-phone").value.trim();
            const address = document.getElementById("swal-address").value.trim();
            const company = document.getElementById("swal-company").value.trim();

            if (!name || !phone || !address || !company) {
                Swal.showValidationMessage("All fields are required");
                return false;
            }

            return { name, phone, address, company };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const contact = result.value;

            Swal.fire({
                icon: "success",
                title: "Contact Saved",
                html: `
                     <p>Name:   ${contact.name}</p>
                     <p>Phone:  ${contact.phone}</p>
                     <p>Address:${contact.address}</p>
                     <p>Company:${contact.company || "N/A"}</p>
                   `,
                   
            
                });
         }
    });

    contacts.push(result);

    return contacts;
});


// const name = document.getElementById("swal-name").value;
// const phone = document.getElementById("swal-phone").value;
// const address = document.getElementById("swal-address").value;
// const company = document.getElementById("swal-company").value;

// let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// function saveContacts() {
//   localStorage.setItem("contacts", JSON.stringify(contacts));
// }


