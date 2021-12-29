    var $toggle_area = document.querySelector('#toggle_area');
    var $target_0 = document.querySelector('#target_0');
    var $target_1 = document.querySelector('#target_1');
    var $target_2 = document.querySelector('#target_2');
    var $target_3 = document.querySelector('#target_3');

    $toggle_area.addEventListener('click', function() {
      var IsMenuOpen = false;
      console.log('드롭다운 메뉴 클릭');
      if (!IsMenuOpen) {
        IsMenuOpen = true;
        document.querySelector('ul').style.display = "block";
      } else {
        IsMenuOpenn = false;
        document.querySelector('ul').style.display = "none";
      }
      console.log(IsMenuOpen);
    });

    document.querySelector('#planet_0').addEventListener('click', function() {
      //console.log('수성 클릭 :' + $target_0);
      $toggle_area.innerHTML = '수성';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid red";
      $target_0.innerHTML = '수성 텍스트0';
      $target_1.innerHTML = '수성 텍스트1';
      $target_2.innerHTML = '수성 텍스트2';
      $target_3.innerHTML = '수성 텍스트3';
    });

    document.querySelector('#planet_1').addEventListener('click', function() {
      $toggle_area.innerHTML = '금성';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid orange";
      $target_0.innerHTML = '금성 텍스트0';
      $target_1.innerHTML = '금성 텍스트1';
      $target_2.innerHTML = '금성 텍스트2';
      $target_3.innerHTML = '금성 텍스트3';
    });

    document.querySelector('#planet_2').addEventListener('click', function() {
      $toggle_area.innerHTML = '지구';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid lime";
      $target_0.innerHTML = '지구 텍스트0';
      $target_1.innerHTML = '지구 텍스트1';
      $target_2.innerHTML = '지구 텍스트2';
      $target_3.innerHTML = '지구 텍스트3';
    });

    document.querySelector('#planet_3').addEventListener('click', function() {
      $toggle_area.innerHTML = '화성';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid green";
      $target_0.innerHTML = '화성 텍스트0';
      $target_1.innerHTML = '화성 텍스트1';
      $target_2.innerHTML = '화성 텍스트2';
      $target_3.innerHTML = '화성 텍스트3';
    });

    document.querySelector('#planet_4').addEventListener('click', function() {
      $toggle_area.innerHTML = '목성';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid blue";
      $target_0.innerHTML = '목성 텍스트0';
      $target_1.innerHTML = '목성 텍스트1';
      $target_2.innerHTML = '목성 텍스트2';
      $target_3.innerHTML = '목성 텍스트3';
    });

    document.querySelector('#planet_5').addEventListener('click', function() {
      $toggle_area.innerHTML = '토성';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid pink";
      $target_0.innerHTML = '토성 텍스트0';
      $target_1.innerHTML = '토성 텍스트1';
      $target_2.innerHTML = '토성 텍스트2';
      $target_3.innerHTML = '토성 텍스트3';
    });

    document.querySelector('#planet_6').addEventListener('click', function() {
      $toggle_area.innerHTML = '천왕성';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid purple";
      $target_0.innerHTML = '천왕성 텍스트0';
      $target_1.innerHTML = '천왕성 텍스트1';
      $target_2.innerHTML = '천왕성 텍스트2';
      $target_3.innerHTML = '천왕성 텍스트3';
    });

    document.querySelector('#planet_7').addEventListener('click', function() {
      $toggle_area.innerHTML = '해왕성';
      document.querySelector('ul').style.display = "none";
      IsMenuOpenn = false;
      document.querySelector('.txt div').style.borderBottom = "3px solid teal";
      $target_0.innerHTML = '해왕성 텍스트0';
      $target_1.innerHTML = '해왕성 텍스트1';
      $target_2.innerHTML = '해왕성 텍스트2';
      $target_3.innerHTML = '해왕성 텍스트3';
    });