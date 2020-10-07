var app = new Vue({
    el : '#app',
    data : {
        book :[
            {buku : 'Pulang',penulis : 'Tere Liye'},
        ],
        visibility : true
    },
    
    methods : {
        input(){
            app.book.push({
                buku : this.buku,
                penulis : this.penulis
            })
        },
        edit(){
            this.$set(this.book, this.index-1,{buku:this.editbuku,penulis:this.editpenulis})		
        },
        deleteEvent: function(event) {
            this.book.splice(event, 1);
        }
    }
})