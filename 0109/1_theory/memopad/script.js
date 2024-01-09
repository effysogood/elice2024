const addForm = document.querySelector('.add');
const list = document.querySelector('.memos');
const alertMsg = document.querySelector('.alert-msg');
const search = document.querySelector('.search input');

const saveMemo = (memoText) => {
    const memoItem = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${memoText}</span><i
                    class="far fa-trash-alt delete"></i></li>`;
    list.innerHTML += memoItem;
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const memo = addForm.add.value;

    // 비어 있는 메모 방지
    if (memo.length) {
        // 문자가 존재한다면
        saveMemo(memo);
        alertMsg.classList.add('hidden');
        addForm.add.value = '';
    } else {
        alertMsg.classList.remove('hidden');
    }
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterMemo = (memo) => {
    Array.from(list.children)
        .filter((memoText) => !memoText.textContent.includes(memo))
        .forEach((memoText) => memoText.classList.add('filtered'));
    Array.from(list.children)
        .filter((memoText) => memoText.textContent.includes(memo))
        .forEach((memoText) => memoText.classList.remove('filtered'));
};

search.addEventListener('keyup', (e) => {
    const searchText = search.value;
    console.log(searchText);
    filterMemo(searchText);
});
