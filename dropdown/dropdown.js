    const $toggle_area = document.querySelector('#toggle_area');
    const $target_0 = document.querySelector('#target_0');
    const $target_1 = document.querySelector('#target_1');
    const $target_2 = document.querySelector('#target_2');
    const $target_3 = document.querySelector('#target_3');
    const dropdown_menu = document.querySelector('.menu ul');
    const arrow = document.querySelector('#arrow');
    const dropdown_list = document.querySelectorAll('.planet');

    const dorpdown_value = [
      {color:'어두운 회색', type:'달처럼 표면에 작은 구덩이가 많다.', ring:'고리는 없다.', etc:'태양 가까이에 있다.'},
      {color:'황토색 또는 밝은 노란색', type:'울퉁불퉁하다. 화산과 같이 솟은 곳도 있고 깊은 계곡처럼 보이는 곳도 있다.', ring:'고리는 없다.', etc:'밤하늘에서 밝게 보인다.'},
      {color:'푸른색', type:'울퉁불퉁하다. 높은 산도 있고 깊은 계곡처럼 보이는 곳도 있다.', ring:'고리는 없다.', etc:'달이 있다. 생명체가 산다.'},
      {color:'대체로 붉은색', type:'울퉁불퉁하다. 깊은 계곡처럼 보이는 곳도 있다.', ring:'고리는 없다.', etc:'밤하늘에서 붉게 보인다.'},
      {color:'연한 갈색', type:'여러 개의 가로 줄무늬가 있다.', ring:'희미하지만 고리가 있다.', etc:'다른 행성에 비해 선명한 줄무늬가 있고, 줄무늬 사이에 주황색의 둥근 점 같은 무늬가 있다.'},
      {color:'연한 황토색 또는 연한 갈색', type:'희미하지만 연한 갈색이나 회색의 가로로 된 줄무늬가 있다.', ring:'가운데에 커다란 고리가 있다.', etc:'줄무늬가 선명하게 구분되지 않는다.'},
      {color:'청록색', type:'매끈한 표면에 희미한 세로 줄무늬를 볼 수 있다.', ring:'세로 방향으로 여러 개의 희미한 고리가 있다.', etc:'고리가 세워져 있고, 수직으로 기울어져서 비스듬히 누워 있는 모습이다.'},
      {color:'파란색', type:'연한 가로 줄무늬를 볼 수 있다.', ring:'희미하지만 여러 개의 고리가 있다.', etc:'주위보다 어두운 둥근 점 같은 무늬가 있다.'}
    ];

    function toggle_arrow() {
      if (arrow.textContent == "▼") {
        arrow.textContent = "▲";
      } else {
        arrow.textContent = "▼";
      }
    };

    

    $toggle_area.addEventListener('click', function() {
      dropdown_menu.classList.toggle('show');
      toggle_arrow();
      console.log("toggle_area click");

      dropdown_list.forEach(function(item) {
        item.addEventListener('click', function(e) {
          const listLabel = e.currentTarget.textContent;
          $toggle_area.innerHTML = listLabel;

          

          const listId = e.currentTarget.getAttribute('id')
          const convertNum = parseInt(listId.toString().split("_")[1]);
          $target_0.textContent = dorpdown_value[convertNum].color;
          $target_1.textContent = dorpdown_value[convertNum].type;
          $target_2.textContent = dorpdown_value[convertNum].ring;
          $target_3.textContent = dorpdown_value[convertNum].etc;
        });
  
      });
    });

    $toggle_area.addEventListener('blur', function() {
      dropdown_menu.classList.remove('show');
      toggle_arrow();
      console.log("toggle_area blur");
    });

    
