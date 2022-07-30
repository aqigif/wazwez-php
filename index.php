<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "wazwez";

  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT * FROM Tasks ORDER BY task_id DESC;";
  $result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>

<head>
  <title>Wazwez App</title>
  <link rel="stylesheet" href="style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <header>
    <img src="./assets/img/logo-wazwez.png" alt="logo" class="logo-brand">
    <nav>
      <div class="icon-notification icon"></div>
      <div class="user-profile">
        <div class="user-avatar">
        </div>
        <div class="user-name">
          Fatir
        </div>
        <div class="user-arrow">
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div id="container" class="container padding-4 padding5">
      <button class="button-add" onclick="addTask()">tambah task</button>

      <div id="new-data-form" class="new-data hidden">
        <input id="name" oninput="handleChange(this)" />
        <input id="desc" oninput="handleChange(this)" />
        <input id="date" oninput="handleChange(this)" />
      </div>
      <ul id="list-container" class="list-container">
        <?php
        foreach ($result as $data) {
          echo "<li onclick=\"handleDone(this)\" class=\"list-item\">" . $data['name'] . "</li>";
        }
        ?>
      </ul>
    </div>
  </main>
</body>

<!-- <script src="./script.js"></script> -->
<!-- <script src="./assets/js/dom.js"></script> -->
<!-- <script src="./assets/js/jsFunctions.js"></script> -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>
  function addTask() {
    document.getElementById("new-data-form").classList.remove("hidden");
  }

  function handleShowSubtask(param) {
    console.log(param.innerHTML)
    if (param.innerHTML.includes("hidden")) {
      param.innerHTML = param.innerHTML.replace("hidden", "show")
    } else {
      param.innerHTML = param.innerHTML.replace("show", "hidden")
    }
  }
  document.addEventListener('keypress', async function(e) {
    const addFormClasslist = document.getElementById("new-data-form").classList
    if (addFormClasslist.contains("hidden") === false) {
      if (e.key === 'Enter') {
        const task = {
          name: document.getElementById("name").value,
          desc: document.getElementById("desc").value,
          date: document.getElementById("date").value
        }

        if (task?.name) {
          jQuery.ajax({
            type: "POST",
            url: '/wazwez/crud.php',
            dataType: 'json',
            data: {
              functionname: 'insertTask',
              arguments: [task.name]
            },

            success: function(obj, textstatus) {
              if (String(obj?.result).includes("Error")) {
                alert(obj.result);
              } else if (obj?.error) {
                alert(obj.error);
              } else {
                alert("success");
                handleEnter(task)
                document.getElementById("name").value = ""
                document.getElementById("desc").value = ""
                document.getElementById("date").value = ""
              }
            },
          });
        } else {
          alert("name wajib diisi")
        }
      }
    }
  });

  function handleDone(params) {
    console.log(params)
    params.style = "text-decoration: line-through;"
  }

  function handleEnter(task) {
    document.getElementById("new-data-form").classList.add("hidden");
    let listContainer = document.getElementById("list-container");
    listContainer.insertAdjacentHTML("afterbegin", `<li onclick="handleDone(this)" class="list-item">${task.name}</li>`);
  }

  function handleChange(params) {
    console.log(params.value);
  }
</script>

</html>