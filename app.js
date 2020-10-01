var app = new Vue({
    el : '#app',
    data : {
        names :[
            {buku : 'Pulang',penulis : 'Tere Liye'},
        ],
        visibility : true
    },
    
    methods : {
        input(){
            app.names.push({
                buku : this.buku,
                penulis : this.penulis
            })
        },
        edit(){
            this.$set(this.names, this.index-1,{buku:this.editbuku,penulis:this.editpenulis})		
        },
        deleteEvent: function(event) {
            this.names.splice(event, 1);
        }
    }
})