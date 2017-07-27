
// TarsiusLabs Presesn Hard Code By Harun Yasir Umar, S.SI
var myApp = new Framework7({
    modalTitle: 'SIPiki',
    // Enable Material theme
   // material: true,
	pushState: true,
  cache : true,
    cacheDuration : 1000*60*10,
});


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

// home

myApp.onPageInit('index', function (page) {

	
	
	
	mainView.router.refreshPage();
	if(store.get('level_mu') == 4) {
		$$('#home_agenda').hide();
		$$('#home_penilaian').hide();
		$$('#pertama2').append('<div class="row"><a href="menu_profil.html" class="item-link item-content"><div class="friends-col-30"><img class="rounded" src="img/home/profile.png" width="60"><div class="friend-name">Profil</div></div></a><a href="menu_info.html" class="item-link item-content"><div class="friends-col-30"><img class="rounded" src="img/home/informasi.png" width="60"><div class="friend-name">Info</div></div></a><a href="laporan.html?id='+store.get('id')+'" class="item-link item-content"><div class="friends-col-33"><img class="rounded" src="img/home/laporan.png" width="60"><div class="friend-name">Laporan Penilain</div></div></a><a href="tentang.html" class="item-link item-content"><div class="friends-col-33"><img class="rounded" src="img/home/bantuan.png" width="60"><div class="friend-name">Tentang</div></div></a></div>');	
			$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_news",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	$.each(data.result, function(i,field){ 
		$('#news_terbaru').append('<a href="#" class="item-link item content"><div class="item-content"><div class="item-media"><img class="rounded" src="'+field['image']+'" width="50"></div><div class="item-inner news"><div class="item-title-row"><div class="item-title">'+field['nama']+'</div><div class="item-after">'+field['tgl']+'</div></div><div class="item-text">'+field['ket']+'</div></div></div></a></div>');
		
	
							
		});
	
	}	
 
});
	
	}
	
	
	else {
			
			$$('#pertama').append('<div class="row"><a href="menu_profil.html" class="item-link item-content"><div class="friends-col-30"><img class="rounded" src="img/home/profile.png" width="60"><div class="friend-name">Profil</div></div></a><a href="menu.html" class="item-link item-content" id="home_agenda"><div class="friends-col-30"><img class="rounded" src="img/home/kinerja.png" width="60"><div class="friend-name">Penugasan</div></div></a><a href="menu_info.html" class="item-link item-content"><div class="friends-col-30"><img class="rounded" src="img/home/informasi.png" width="60"><div class="friend-name">Info</div></div></div></a></div>');	
			
			$$('#pertama1').append('<div class="row"><a href="menu_laporan.html" class="item-link item-content"><div class="friends-col-33"><img class="rounded" src="img/home/laporan.png" width="60"><div class="friend-name">Laporan Penilain</div></div></a><a href="menun.html" class="item-link item-content" id="home_penilaian"><div class="friends-col-30"><img class="rounded" src="img/home/penilaian.png" width="60"><div class="friend-name">Penilain</div></div></a><a href="tentang.html" class="item-link item-content"><div class="friends-col-33"><img class="rounded" src="img/home/bantuan.png" width="60"><div class="friend-name">Tentang</div></div></a></div>');
				$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_news",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	$.each(data.result, function(i,field){ 
		$('#news_terbaru').append('<a href="#" class="item-link item content"><div class="item-content"><div class="item-media"><img class="rounded" src="'+field['image']+'" width="50"></div><div class="item-inner news"><div class="item-title-row"><div class="item-title">'+field['nama']+'</div><div class="item-after">'+field['tgl']+'</div></div><div class="item-text">'+field['ket']+'</div></div></div></a></div>');
		
	
							
		});
	
	}	
 
});				
	}
	

}) 


function get_user_spd(){
	
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_spd",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	$.each(data.result, function(i,field){ 
			$('#user_spd').append('<li><label class="label-checkbox item-content"><input type="checkbox" id="cekbox" name="cekbox[]" value="'+field['id']+'@'+field['id_device']+'"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title1"><img class="rounded" src="http://156.67.217.240/serv_sipiki/public/spd/'+field['foto_pic']+'" width="30"></div><div class="item-title" style="font-size: 12px;">'+field['spd']+'</div></div></label></li>');
		
		});
	
	}	
 
});
}

function get_katagori(){
	
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_katagori",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	$.each(data.result, function(i,field){ 
			$('#katagori').append('<li><label class="label-checkbox item-content"><input type="checkbox" id="cekboxx" name="cekboxx[]" value="'+field['id']+'"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title">'+field['judul']+'</div></div></label></li>');
		
		});
	
	}	
 
});
}

if (localStorage.getItem("user") === null) {
$('#login').show();		
$('#intro').remove();

	
	
$$('#loginx').on('click', function(){
	$('#login').remove();
	mainView.router.loadPage("login.html");
	mainView.router.refreshPage();
});

}
else {



	
	
	$$('#user').append(store.get('user'));
	
	$('#login').remove();

	if(store.get('level_mu') == 4) {
		$$('#home_agenda').hide();
		$$('#home_penilaian').hide();
		
	}

}


myApp.onPageInit('isi_agenda', function (page) {
	
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/isi_agenda2",
	dataType: "json",
	type: "POST",
	data: {"token":store.get('token'),"id":store.get('id_users')},
	success: function (data) {
		
	if (data.result == 0 ){   
		
			myApp.alert('tidak ada data');
			$(".preloader").fadeOut("slow");
	}

else{ 

		  $.each(data.result, function(i,field){
			  
			
						if(field['sistem'] === 'true'){
							
							
							
							  $$("#isi_agenda").append('<li><a href="#" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="img/home/rapat.png" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field['judul']+'</div><div class="item-after">'+field['tanggal']+'</div> </div><div class="item-text"> '+field['keterangan']+'</div></div></div></a></li>');
                 	  
						}
						
						else {
							  $$("#isi_agenda").append('<li><a href="tambah_user.html?id='+field['id']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="img/home/rapat1.png" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field['judul']+'</div><div class="item-after">'+field['tanggal']+'</div></div><div class="item-text">'+field['keterangan']+'</div></div></div></a></li>');
                 	  
						}
					
                    
					  
					  $(".preloader").fadeOut("slow");
                });
}

		}
});

	
});
	

myApp.onPageInit('tambah_agenda', function (page) {


	

	
	$('#buat_agenda').on('click', function () {
		 
		$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
		
		$('#buat_agenda').hide();
		var judul 		= $$('#judul').val();
		var keterangan 	= $$('#keterangan').val();
		var tanggal 	= $$('#tanggal').val();
		var jam 		= $$('#jam').val();
		var alamat	 	= $$('#alamat').val();
	
		
		 if(judul == "" ){
			 
			 myApp.alert('Judul Masih Kosong');
			 $('#buat_agenda').show();
			  $('#loading').hide();
			 
		 }
		 else if(keterangan =="" ){
			 
			 myApp.alert('keterangan Masih Kosong');
			 	 $('#buat_agenda').show();
			  $('#loading').hide();
		 }
		 else if(tanggal =="" ){
			 
			 myApp.alert('Tanggal Belum Di Tentukan');
			 	 $('#buat_agenda').show();
			  $('#loading').hide();
		 }
		 else if(jam =="" ){
			 
			 myApp.alert('Jam Belum Di Tentukan');
			 	 $('#buat_agenda').show();
			  $('#loading').hide();
		 }
		
		  else if(alamat =="" ){
			 
			 myApp.alert('alamat Masih Kosong');
			 	 $('#buat_agenda').show();
			  $('#loading').hide();
		 }
		 else {
			 
			
	
	
		$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/simpan_agenda",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"id_users":store.get('id'),
				"judul":judul,
				"keterangan":keterangan,
				"tanggal":tanggal,
				"alamat":alamat,
				"jam":jam
				},
		success: function (data) {
		
		myApp.alert(data.result);
		$('#buat_agenda').show();
		$('#loading').hide();
		mainView.router.loadPage('index.html');
		
		}
		});
		 }
	

	
	});

	
	
 });
 
myApp.onPageInit('tambah_users', function (page) {
	 
		$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_profile/"+store.get('id')+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	
			$("#img5").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+data.result['foto_pic']+"");
			$("#name_tambah").append(data.result['name']);
	
	}	
 
});
	

	

	
	
	var idi = page.query.id;
	get_user_spd();	
	
	
	
	$('#tambah_users').on('click', function () {
		 
	 var arr = $('input:checked').map(function() {
		 return $(this).val();
		 
	 }).get();
	 
	 
	 console.log(arr);
		var sinta = arr.join(",");
		var id_agenda	= $$('#agenda').val();
		
		
		if(arr == "" ){
			 
			 myApp.alert('Belum Ada Peserta');
		 }
		
		else {
			
			$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/simpan_users",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"id_users":idi,
				"cekbox":sinta
				},
			success: function (data) {
	
					delete sinta;
		}
		});
			
			mainView.router.loadPage('tambah_katagori.html?id='+idi+'');
		}
		
		

	

	
	});

	
	
 });
 
 
myApp.onPageInit('info', function (page) {

	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/isi_agenda",
	dataType: "json",
	type: "POST",
	data: {"token":store.get('token'),"id":store.get('id_users'),"level":store.get('level_mu')},
	success: function (data) {
		
		if(data.result == 0 ) {
			myApp.alert('Belum Ada Data Lengkapi Katagori Penilain dan Anggota Agenda DI Menu Penugasan');
			$(".preloader").fadeOut("slow");
		}
		
		else {
		  $.each(data.result, function(i,field){
			
				if(store.get('level_mu') == '4'){
					$$("#info").append('<li><a href="detail_info.html?id='+field.agenda['id']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="img/home/rapat1.png" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field.agenda['judul']+'</div><div class="item-after">'+field.agenda['tanggal']+'</div></div><div class="item-text">'+field.agenda['keterangan']+'</div></div></div></a></li>');
                 	 
					
				}
				else {
					
					$$("#info").append('<li><a href="detail_info.html?id='+field['id']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="img/home/rapat1.png" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field['judul']+'</div><div class="item-after">'+field['tanggal']+'</div></div><div class="item-text">'+field['keterangan']+'</div></div></div></a></li>');
                 	 
				}
					   
						$(".preloader").fadeOut("slow");
                   
                });
		}

		}
});
	
 });
 
myApp.onPageInit('detail_info', function (page) {
	
	 function hitung(detik,menit,jam,idnya) {
             
                setTimeout(hitung,1000);
               if(menit < 20 && jam == 0){
				   
                     var peringatan = 'style="color:red"';
				
				
               };
			
				if(store.get('level_mu') == '4' && menit < 20 && jam == 0) {
						 $('#terlambat').show();
						  $('#absen_info').hide();
						
				};
				
			
            
               $("#timer"+idnya).html(
                      '<h1 align="center"'+peringatan+'> Waktu Tersisah ' + menit + ' menit '+ detik+ ' detik lagi</h1><hr>'
                );
  
               
                detik --;
 
              
                if(detik < 0) {
                    detik = 59;
                    menit --;
					if(menit < 0) {
						$('#terlambat').remove();
							$('#aktif_absen_info').remove();
							$('#absen_info').remove();
							 $("#timer"+idnya).remove();
                        if(jam < 0) {                                                                 
                            clearInterval();  
                        } 
                    } 
                } 
            }
         
 
        
          
			
	var idi = page.query.id;
	
	var map;
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/detail_info/"+idi+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	success: function (data) {
			
					var idnya = data.result['id'];
					  $$("#judul").append(data.result['judul']);
                      $$("#keterangan").append(data.result['keterangan']);
					  $$("#tanggal").append(data.result['tanggal']);
					  $$("#jam").append(data.result['jam'] + ' Wita');
					  $$("#jumlah").append(data.jumlah + ' PD');
					  $$("#alamat").append(data.result['alamat']);
						$$("#waktu_taru").html('<div class="col-100"><div class="content-block" id="timer'+idnya+'"></div>');
						$(".preloader").fadeOut("slow");
	
			 if(store.get('level_mu') == 4 && data.result['waktu'] == 1 ) {
			$('#absen_info').show();
	
			  var detik = data.detik;
              var menit = data.menit;
              var jam   = 0;
			  hitung(detik,menit,jam,idnya);
		$('#absen').on('click', function () {
		$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
		$('#absen').hide();
		var idi = page.query.id;
		
			$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/absen",
	dataType: "json",
	type: "POST",
	data: {"token":store.get('token'),"id_users":store.get('id'),"id_agenda":idi},
	success: function (data) {
		
	
		myApp.alert(data.result);
		mainView.router.loadPage('index.html');				

		}
});
	
	
	
		
		});
}


	
else if(store.get('level_mu') != 4 && data.result['waktu'] == 1 ){

  var detik = data.detik;
              var menit = data.menit;
              var jam   = 0;
			  hitung(detik,menit,jam,idnya);
	}
	
else if (store.get('level_mu') != 4 && data.result['waktu'] == 0 ) {
			$('#aktif_absen_info').show();
	
		
		$('#aktif_absen').on('click', function () {
		var idi = page.query.id;
		$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
		$('#aktif_absen').hide();
			$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/aktif_absen",
	dataType: "json",
	type: "POST",
	data: {"token":store.get('token'),"id":idi},
	success: function (data) {
		
	
		myApp.alert(data.result);
		mainView.router.loadPage('index.html');				

		}
});
	
		
		});
	
}


						
	
				

		}
});




	$('#absen_terlambat').on('click', function () {
		$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
		$('#absen_terlambat').hide();
		var idi = page.query.id;
		var valun = $$('#nilai').val();
		$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/absen_terlambat",
	dataType: "json",
	type: "POST",
	data: {"token":store.get('token'),"id_agenda":idi,"id_users":store.get('id_users'),"nilai":valun},
	success: function (data) {
		
	
		myApp.alert(data.result);
		mainView.router.loadPage('index.html');				

		}
});
	
	
	
		
		});



	       
          
        
		 
});

myApp.onPageInit('tambah_katagori', function (page) {
	

	
	get_katagori();
		
	var idi = page.query.id;
	
	$('#tambah_katagori').on('click', function () {
	 
	 urr = $('#cekboxx:checked').map(function() {
		 return $(this).val();
		 
	 }).get();
		
		 var jojo = urr.join(",");
		
		var id_agenda	= $$('#agenda').val();
		
	
		if(jojo == "" ){
			 
			 myApp.alert('Belum Ada katagori');
		 }
		
		else {
			
			$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/simpan_katagori",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"id_agenda":idi,
				"cekboxx":jojo
				},
			success: function (data) {
			myApp.alert(data.result);

		}
		});
			mainView.router.loadPage('index.html');
		}
		
		

	

	
	});
	
                     
});
 

 
myApp.onPageInit('nilai', function (page) {
var id = page.query.id;
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/isi_agenda1",
	dataType: "json",
	type: "POST",
	data: {"token":store.get('token'),"id":store.get('id_users')},
	success: function (data) {
		

		  $.each(data.result, function(i,field){

                      $$("#nilai").append('<li><a href="user_nilai.html?id='+field['id']+'&golongan='+id+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="img/home/rapat.png" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field['judul']+'</div><div class="item-after">'+field['tanggal']+'</div></div><div class="item-text">'+field['keterangan']+'</div></div></div></a></li>');
                 	  
					  $(".preloader").fadeOut("slow");
                });
	

		}
});
	
 });
 
 myApp.onPageInit('nilaib', function (page) {
var id = page.query.id;
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/isi_disposisi1",
	dataType: "json",
	type: "POST",
	data: {"token":store.get('token'),"id":store.get('id_users')},
	success: function (data) {
		

		  $.each(data.result, function(i,field){

                      $$("#nilai").append('<li><a href="user_nilaib.html?id='+field['id']+'&golongan='+id+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="img/home/disposisi1.png" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field['judul']+'</div><div class="item-after">'+field['tanggal']+'</div></div><div class="item-text">'+field['ket']+'</div></div></div></a></li>');
                 	  
					  $(".preloader").fadeOut("slow");
                });
	

		}
});
	
 });
 
 myApp.onPageInit('user_nilai', function (page) {
	 
	 var idi = page.query.id;
	  var golongan = page.query.golongan;
	 
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_user_nilai/"+idi+"/"+golongan+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
		
		if (data.result == 0 ){   
		
			myApp.alert('tidak ada data');
			$(".preloader").fadeOut("slow");
	}

else{   
   $.each(data.result, function(i,field){ 
	
						$$("#user").append('<li><a href="beri_nilai.html?id='+field['id_users']+'&id_agenda='+idi+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="http://156.67.217.240/serv_sipiki/public/spd/'+field['foto_pic']+'" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+field['name']+'</div><div class="item-after"></div></div><div class="item-text">'+field['spd']+'</div></div></div></a></li>');
		  	  
		});
}
			
	
	
	
		
		
	 $(".preloader").fadeOut("slow");
	}	
 
});
	
 });
 
  myApp.onPageInit('user_nilaib', function (page) {
	 
	 var idi = page.query.id;
	  var golongan = page.query.golongan;
	 
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_user_nilaib/"+idi+"/"+golongan+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
		
			
		if (data.result == 0 ){   
		
			myApp.alert('tidak ada data');
			$(".preloader").fadeOut("slow");
	}

else{  

	$.each(data.result, function(i,field){ 
			

						$$("#user").append('<li><a href="beri_nilaib.html?id='+field['id']+'&id_agenda='+idi+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="http://156.67.217.240/serv_sipiki/public/spd/'+field['foto_pic']+'" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field['name']+'</div><div class="item-after"></div></div><div class="item-text">'+field['spd']+'</div></div></div></a></li>');
               
				
			
			
			  
			
			
			
		  	  
		});
}
	 $(".preloader").fadeOut("slow");
	}	
 
});
	
 });
	

 myApp.onPageInit('beri_nilai', function (page) {
	 
	 var idi = page.query.id_agenda;
	  var id_x = page.query.id;
	  
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_katagori_peragenda/"+idi+"/"+id_x+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	$.each(data.result, function(i,field){ 
			
			$$("#katagori").append('<li><div class="item-content"><div class="item-inner"><div class="item-title label">'+field.katagori['judul']+'</div><div class="item-input"><select class="not-empty-state" id="nilai_user[]"><option value="'+field['nilai']+'-'+field.katagori['id']+'">'+field['nilai']+'</option>  <option value="100-'+field.katagori['id']+'">100</option>  <option value="90-'+field.katagori['id']+'">90</option>  <option value="80-'+field.katagori['id']+'">80</option>  <option value="70-'+field.katagori['id']+'">70</option>  <option value="60-'+field.katagori['id']+'">60</option>  <option value="50-'+field.katagori['id']+'">50</option>  <option value="40-'+field.katagori['id']+'">40</option><option value="30-'+field.katagori['id']+'">30</option><option value="20-'+field.katagori['id']+'">20</option><option value="10-'+field.katagori['id']+'">10</option></select></div></div></div></li>');	
		});
	
	}	
 
});
	 $(".preloader").fadeOut("slow");
	$('#simpan_nilai').on('click', function() {
			$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
		$('#simpan_nilai').hide();
		 
	 urrb = $('option:selected').map(function() {
		 return $(this).val();
		 
	 }).get();
	 

		
	var jojon = urrb.join(",");
	

				$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/simpan_user_nilai",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"id_agenda":idi,
				"id_users":id_x,
				"nilai":jojon
				},
			success: function (data) {
			myApp.alert(data.result);
			mainView.router.loadPage('index.html');
		}
		});

	});
	
 });
	
 myApp.onPageInit('beri_nilaib', function (page) {
	 
	 var idi = page.query.id_agenda;
	  var id_x = page.query.id;
	  
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_katagori_peragendab/"+id_x+"/"+idi+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {

			
			$$("#katagori").append('<li><div class="item-content"><div class="item-inner"><div class="item-title label">'+data.result[0]['judul']+'</div><div class="item-input"><select class="not-empty-state" id="nilai_user"><option value="'+data.result[0]['nilai']+'">'+data.result[0]['nilai']+'</option>  <option value="100">100</option>  <option value="90">90</option>  <option value="80">80</option>  <option value="70">70</option>  <option value="60">60</option>  <option value="50">50</option>  <option value="40">40</option><option value="30">30</option><option value="20">20</option><option value="10">10</option></select></div></div></div></li>');	
		
	
	}	
 
});
	 $(".preloader").fadeOut("slow");
	$('#simpan_nilaib').on('click', function() {
		$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
		$('#simpan_nilaib').hide();
		var nilaiyh = $$('#nilai_user').val();
		var idi = page.query.id_agenda;
		var id_x = page.query.id;
		
	
		
				$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/simpan_nilai_disposisi",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"id_disposisi":idi,
				"id":id_x,
				"nilai":nilaiyh
				},
			success: function (data) {
			myApp.alert(data.result);
			mainView.router.loadPage('index.html');
		}
		});

	});
	
 });
		
 myApp.onPageInit('laporan', function (page) {
	  var idi = page.query.id;
		  
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_laporan_awal/"+idi+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	$.each(data.result, function(i,fieldx){ 
				
				
			$.each(fieldx.total, function(i,field){ 
				var nilai_akhir = (field['total_nilai'] / field['total_agenda']);
					var warna ="";
					var zona ="";
					
					if(nilai_akhir <=100 && nilai_akhir >=90) {
						warna = "color-green";
						
					}
					 else if(nilai_akhir <90 && nilai_akhir >=60) {
						warna = "color-blue";
						
				
					}
					else if(nilai_akhir <60 && nilai_akhir >=40) {
						warna = "color-yellow";
						
				
					}
					else{
						
						warna = "color-red";
					
				
					}
					
					$$("#laporan").append('<li><a href="laporan_a.html?id='+fieldx['id']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="http://156.67.217.240/serv_sipiki/public/spd/'+fieldx['foto_pic']+'" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title" >'+fieldx['name']+'</div><div class="item-after"><a href="#" class="button button-raised button-fill '+warna+'" style="border-radius: 30px;height: 30px;width: 30px;"></a></div></div><div class="item-text">'+fieldx['spd']+'</div></div></div></a></li>');
				   $(".preloader").fadeOut("slow");
			});
			
			
		});
	
	}	
 
});
	
 });	

 	
 myApp.onPageInit('laporan_b', function (page) {
	 
	 
	  var id = page.query.id;

		  $('#pilihan').change(function() {
		  $("#laporan").empty();
		  $('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');

			var pilih = $(this).val();
			
				$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_laporan_awal_b/"+id+"/"+pilih+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	if(data.result == 0 ) {
			myApp.alert('Belum Ada Data');
			$(".preloader").fadeOut("slow");
		}
		
		else {
		$.each(data.result, function(i,fieldx){ 
		
		
	
			
				var nilai_akhir = (fieldx['jumlah'] / fieldx['total_agenda']);
					var warna ="";
				
					
					if(nilai_akhir <=100 && nilai_akhir >=90) {
						warna = "color-green";
						
					}
					 else if(nilai_akhir <90 && nilai_akhir >=60) {
						warna = "color-blue";
						
				
					}
					else if(nilai_akhir <60 && nilai_akhir >=40) {
						warna = "color-yellow";
						
				
					}
					else{
						
						warna = "color-red";
						
				
					}
		
			
		
					$$("#laporan").append('<li><a href="laporan_a.html?id='+fieldx['id_users']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="http://156.67.217.240/serv_sipiki/public/spd/'+fieldx['foto_pic']+'" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title" >'+fieldx['name']+'</div><div class="item-after"><a href="#" class="button button-raised button-fill '+warna+'" style="border-radius: 30px;height: 30px;width: 30px;"></a></div></div><div class="item-text">'+fieldx['spd']+'</div></div></div></a></li>');
			
				
				});
		}
			
	
	   $(".preloader").fadeOut("slow");
	}	
 
});
		
		});



		  
		  

	
 });
 
myApp.onPageInit('login', function (page) {

$(document).ready(function() {
$$('#masuk').on('click', function () {
	
	$("#loding_login").append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" id="daftarder" align="center"></div></div>');
   
   

	var username =  $$('#username').val();
	var pass = $$('#password').val();
	
	if (username === '') {
		
		myApp.alert('email masih kosong');
		$(".preloader").fadeOut("slow");
	}
	else  if(pass === '') { 
		myApp.alert('password masih kosong');
		$(".preloader").fadeOut("slow");
	} 
	
	else {
		
		$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/login?",
	dataType: "json",
	type: "POST",
	data: {"email":username,"password":pass},
	success: function (data) {
		if(data.login == 'success') {
			
			store.set('id', data.id);
			store.set('id_users', data.id);
			store.set('id_spd', data.id_spd);
			store.set('user', data.user);
			store.set('token', data.token);
			store.set('email_mu', data.email);
            store.set('nohp_mu', data.no_hp);
            store.set('level_mu', data.level);

				mainView.router.loadPage('index.html');
		   
		 

		}
		else if (data.login == 'fail') {
			myApp.alert('Email Atau Password Salah');
			$(".preloader").fadeOut("slow");
			
		}
		else if (data.login == 'nott') {
			myApp.alert('Akunt Ini belum Aktif');
			$(".preloader").fadeOut("slow");
			
		}
		else {
			myApp.alert('sepertinya ada yang salah');
			$(".preloader").fadeOut("slow");
		}
	}
	
	
});
	}
	
   
   
});



   

});



});

$$('#keluar').on('click', function(){
	
	store.clear();
	mainView.router.loadPage("login.html");
	
}); 

 
 myApp.onPageInit('anggota', function (page) {
	 
		  var id = page.query.id;
	 
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_anggota/"+id+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
	$.each(data.result, function(i,field){ 
			
			$$("#anggota").append(' <li><a href="profile.html?id='+field['id']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="http://156.67.217.240/serv_sipiki/public/spd/'+field['foto_pic']+'" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+field['name']+'</div></div><div class="item-text">'+field['spd']+'</div></div></div></a></li>');
                 	  
		});
	   $(".preloader").fadeOut("slow");
	}	
 
});
	
 });
 
  myApp.onPageInit('profile', function (page) {
	 
	  var id = page.query.id;
	  var map;
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_profile/"+id+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
		 	$("#img1").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+data.result['foto_cover']+"");
			$("#img2").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+data.result['foto_pic']+"");
			$('#spd').append(data.result['spd']);
			$('#nama').append(data.result['name']);
			$('#no_hp').append(data.result['no_hp']);
			$('#nip').append(data.result['nip']);
			$('#email').append(data.result['email']);
			
		map = new GMaps({
        div: '#koord',
        lat: data.result['lat'],
        lng: data.result['lang'],
		zoom: 17
      });
      map.addMarker({
        lat: data.result['lat'],
        lng: data.result['lang'],
        title: 'Marker with InfoWindow',
		icon: 'img/home/maker.png',
        infoWindow: {
        content: ''+data.result['name']+''
        }
      });
		   $(".preloader").fadeOut("slow");
	}	
 
});
	
 });

 
 
  myApp.onPageInit('laporan_a', function (page) {
	 
	 var idi = page.query.id;
		   if(store.get('level_mu') != '4') {
		 $('#down').remove();
	 }
	 
	 
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_nilai_katagori/"+idi+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
		
			$('#orientasi_pelayanan').append(data.hasiln + ' Point ');
		$.each(data.hasil, function(i,fieldy){ 
			$("#img3").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+fieldy['foto_cover']+"");
			$("#img4").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+fieldy['foto_pic']+"");
			$('#total_agendax').append('Total Agenda : '+fieldy.total[0]['total_agenda']);
			$('#spd1').append(fieldy['spd']);
			$('#nama1').append(fieldy['name']);
			
			
		});
			$.each(data.result, function(i,field){ 
	
			
			
			$$("#nilai_katagori").append('<li><a href="#" class="item-link"><div class="item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title" style="color: green;">'+field['judul']+'</div></div><div class="item-text">'+field['jumlah']+' Point</div></div></div></a></li>');
			
		});
	
			$(".preloader").fadeOut("slow");
	}	
 
});
	
	
	
 });
 
 
 
 
 
 //
  myApp.onPageInit('pribadi', function (page) {

 FCMPlugin.getToken(function(token){
 $("#fcm_token").val(token);
});
	  var id = store.get('id');
	  var map;

	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/get_profile/"+id+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
			$("#img7").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+data.result['foto_cover']+"");
			$("#img8").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+data.result['foto_pic']+"");
			$('#spd').append(data.result['spd']);
			$('#nama').append(data.result['name']);
			$('#no_hp').append(data.result['no_hp']);
			$('#nip').append(data.result['nip']);
			$('#email').append(data.result['email']);

	
	}	
 
});

	$('#up_token').on('click', function() {
	
			  var id_device = $$('#fcm_token').val();
			$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/up_token",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"id_users":id,
				"id_device":id_device
				},
			success: function (data) {
			myApp.alert(data.result);
			mainView.router.loadPage('index.html');
			
		}
		});
		
	});
	
 });

   myApp.onPageInit('pdf', function (page) {



	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/pdf/"+store.get('id')+"",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
		
			$.each(data.result, function(i,field){ 
	
			 $('#tabel').last().append('<tr align="center"><td class="label-cell" >'+field['id']+'</td><td class="numeric-cell">'+field['judul']+'</td><td class="numeric-cell">'+field['jumlah']+'</td><td class="numeric-cell">'+field['Agenda']+'</td></tr>');
			 

			
		
		});
		
			$('#nilai_or').append(data.or[0]['nilai_or']);
			$('#agenda_or').append(data.or[0]['agenda_or']);
		
		
		
			
			$.each(data.hasil, function(i,fieldx){ 
	
			$("#img_pdf").attr("src","http://156.67.217.240/serv_sipiki/public/spd/"+fieldx['foto_pic']+"");
			$('#spd_pdf').append('SPD : ' +fieldx['spd']);
			$('#nama_pdf').append('Nama : ' +fieldx['name']);
			
		
		});
			
		
		
		$('#hasil').last().append('<tr><td class="numeric-cell">'+data.hasil[0].total[0]['total_nilai']+'</td><td class="numeric-cell">'+data.hasil[0].total[0]['total_agenda']+'</td></tr>');
		$(".preloader").fadeOut("slow");	
	
	}	
 
});


	
 });

 
   myApp.onPageInit('pejabat', function (page) {



	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/pejabat",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token')},
	
	success: function (data) {
		
	
		
			
			$.each(data.hasil, function(i,fieldx){ 
				$$('#pejabat').append('<li><a href="profile.html?id='+fieldx['id']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="http://156.67.217.240/serv_sipiki/public/spd/'+fieldx['foto_pic']+'" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+fieldx['name']+'</div></div><div class="item-text">'+fieldx['spd']+'</div></div></div></a></li>');
			
		
		});
			
		
		
		
		$(".preloader").fadeOut("slow");	
	
	}	
 
});




	
 }); 
 
 
 myApp.onPageInit('tambah_disposisi', function (page) {

 
 $(document).ready(function() {
	
	
});



   $$('#ambil_camera').on('click', function () {
    capturePhoto();
});


   $$('#ambil_img').on('click', function () {
    getPhoto(pictureSource.PHOTOLIBRARY);
});



   $$('#upload').on('click', function () {
    upload();
});



var pictureSource; // picture source
var destinationType; // sets the format of returned value
// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);
// device APIs are available
//

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}
// Called when a photo is successfully retrieved
//

function onPhotoDataSuccess(imageURI) {
	alert("Gambar Berhasil di tentukan");
    // Uncomment to view the base64-encoded image data
    console.log(imageURI);
    // Get image handle
    //
    var cameraImage = document.getElementById('image');
    // Unhide image elements
    //
    cameraImage.style.display = 'block';
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    cameraImage.src = imageURI;
}
// Called when a photo is successfully retrieved
//

function onPhotoURISuccess(imageURI) {
	myApp.alert("Foto Berhasil Di pilih");
    // Uncomment to view the image file URI
    console.log(imageURI);
    // Get image handle
    //
    var galleryImage = document.getElementById('image');
    // Unhide image elements
    //
    galleryImage.style.display = 'block';
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    galleryImage.src = imageURI;
}


function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 30,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: destinationType.FILE_URI,
        saveToPhotoAlbum: true
    });
}
// A button will call this function
//

function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 30,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}
// Called if something bad happens.
//

function onFail(message) {
    //alert('Failed because: ' + message);
}





function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}

 
  $$('.demo-picker-modal').on('click', function () {
        myApp.pickerModal('.picker-modal-demo');
    });
	
	
 
 
 
  $$('.demo-picker-modal').on('click', function () {
        myApp.pickerModal('.picker-modal-demo');
    });
	

 

 
 var autocompleteStandaloneSimple = myApp.autocomplete({
        openIn: 'page', //open in page
        opener: $$('#autocomplete-standalone'), //link that opens autocomplete
        backOnSelect: true, //go back after we select something
		valueProperty: 'id', //object's "value" property name
        textProperty: 'spd', //object's "text" property name
        limit: 50,
           source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Show Preloader
            autocomplete.showPreloader();
            // Do Ajax request to Autocomplete data
            $$.ajax({
                 url: 'http://156.67.217.240/serv_sipiki/public/api/anggota_spd?token='+store.get('token')+'',
                method: 'GET',
                dataType: 'json',
                //send "query" to server. Useful in case you generate response dynamically
                data: {
                    query: query
                },
                success: function (data) {
				
                    // Find matched items
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].spd.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                    }
                    // Hide Preoloader
                    autocomplete.hidePreloader();
                    // Render items by passing array with result items
                    render(results);
                }
            });
        },
        onChange: function (autocomplete, value) {
            // Add item text value to item-after
		
            $$('#autocomplete-standalone').find('.item-after').text(value[0]['spd']);
            // Add item value to input value
            $$('#autocomplete-standalone').find('input').val(value[0]['id']);
        }
    });




	
	
	
	$('#buat_disposisi').on('click', function () {
		
		
	
		$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');

		$('#buat_disposisi').hide();
	
		 var arr = $('input:checked').map(function() {
		 return $(this).val();
	 }).get();
	 
	 var barang = arr.concat(arr[100]);
	 var gabung = barang.join(",");
	 
	 
		var judul 		= $$('#judul').val();
		var ket 	= gabung;
		var jangka_waktu 	= $$('#jangka_waktu').val();
		var tujuan		= $$('#tujuan').val();
		var nilai		= '0';
					 
	var img = document.getElementById('image');
	
	 var imageURI = img.src;
	
		 if(judul == "" ){
			 
			 myApp.alert('Judul Masih Kosong');
			 $('#buat_disposisi').show();
			 $('#loading').hide();
		 }
		 
		
		 else if(jangka_waktu =="" ){
			 
			 myApp.alert('Jangka Waktu Belum Di Tentukan');
			  $('#buat_disposisi').show();
			   $('#loading').hide();
		 }
		 
		  else if(ket =="" ){
			 
			 myApp.alert('Keterangan Masi kosong');
			  $('#buat_disposisi').show();
			   $('#loading').hide();
		 }
		 
		 
		 else if(tujuan =="" ){
			 
			 myApp.alert('Tujuan Belum Di Tentukan');
			  $('#buat_disposisi').show();
			   $('#loading').hide();
		 }
		  else if(imageURI == "" ){
			 
			 myApp.alert('Gambar belum disertakan');
			  $('#buat_disposisi').show();
			   $('#loading').hide();
		 }
		 

		
	
	
	
		
		 else {
			 
			  $("#loding_login").append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" id="daftarder" align="center"></div></div>');
	
	

   
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
	
	var params = {};
				
    params.token = store.get('token')
	params.id_dari = store.get('id');
	params.judul = judul;
	params.ket = ket;
	params.jangka_waktu = jangka_waktu;
	params.nilai = nilai;
	params.tujuan = tujuan;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
	

    ft.upload(imageURI, "http://156.67.217.240/serv_sipiki/public/api/simpan_disposisi", SuksesUp, ErrUp,
        options);
		myApp.alert(data.result);
		mainView.router.loadPage('index.html');		
	
	
	
function SuksesUp(r) {
   myApp.alert("sukses upload");
   
}

function ErrUp(r) {
   myApp.alert("Error upload");
   
}


	}

	});
	
 });
 
 
   
myApp.onPageInit('isi_disposisi', function (page) {
	
	
	if(store.get('level_mu') == '4') {
		var url = "http://156.67.217.240/serv_sipiki/public/api/isi_disposisi_user";
	}
	
	else {
		
		var url = "http://156.67.217.240/serv_sipiki/public/api/isi_disposisi";
	}
	
	$.ajax({
	url: url,
	dataType: "json",
	type: "get",
	data: {"token":store.get('token'),"id":store.get('id_users')},
	success: function (data) {
		
		  $.each(data.result, function(i,field){
			  
							var sinta = field['telah'];
							
							if(sinta == "0"){
								var telah = "Belum Di Respon";
								 var gambar = 'disposisi.jpg'
							}
							if(sinta == "1") {
								telah = "Sementara Di kerjakan";
								 var gambar = 'disposisi.jpg'
							}
							 if (sinta == "2") {
							 telah = "Selesai";
							 var gambar = 'disposisi1.png'
							 
							}
							
							 if (sinta == "3") {
							 telah = "Disposisi Di Tolak";
							  var gambar = 'disposisi.jpg'
							}
					
							  $$("#isi_disposisi").append('<li><a href="detail_disposisi.html?id='+field['id']+'" class="item-link"><div class="item-content"><div class="item-media"><img class="rounded" src="img/home/'+gambar+'" width="50"></div><div class="item-inner"><div class="item-title-row"><div class="item-title ">'+field['judul']+'</div><div class="item-after">'+telah+'</div> </div><div class="item-text"> '+field.tujuan['spd']+'</div></div></div></a></li>');

					  
						$(".preloader").fadeOut("slow");
                });
	

		}
});

	
});   
		
myApp.onPageInit('detail_disposisi', function (page) {
	var idi = page.query.id;
	
	var map;
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/detail_disposisi",
	dataType: "json",
	type: "GET",
	data: {"token":store.get('token'),"id":idi},
	success: function (data) {
			
				var sintaa = data.result[0]['telah'];
							if(sintaa == "0"){
								if(store.get('level_mu') == '4'){
									
								$$("#terima").show();
								}
								
								var telahh = "Belum Di Respon";
							}
							if(sintaa == "1") {
								if(store.get('level_mu') == '4'){
								$$("#selesai").show();
								}
								telahh = "Sementara Di kerjakan";
							}
							 if (sintaa == "2") {
							 telahh = "Selesai";
							}
							
								
							 if (sintaa == "3") {
							 telahh = "Disposisi Di Tolak";
							}
					
					

					
					$$("#dari").append(data.hasil[0]['user']['name']);	
					  $$("#judul").append(data.result[0]['judul']);
					  $$("#spd").append(data.result[0]['tujuan']['spd']);
                      $$("#keterangan").append(data.result[0]['ket']);
					   $$("#tanggal").append(data.result[0]['tanggal']);
						$$("#jangka_waktu").append(data.result[0]['jangka_waktu']);
					    $$("#status").append(telahh);
						 $$("#image").attr('src','http://156.67.217.240/serv_sipiki/public/image/'+data.result[0]['gambar']);

					  
					$(".preloader").fadeOut("slow");
					
					
	}
	
	});
	
	
		
	$('#terima').on('click', function() {
	$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
	$('#terima').hide();
			 var idi = page.query.id;
			$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/terima_disposisi",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"disposisi":idi,
				"id":store.get('id')
				},
			success: function (data) {
			myApp.alert(data.result);
			mainView.router.loadPage('index.html');
			
		}
		});
		
	});
		

		
	$('#selesai').on('click', function() {
		$('#loading').append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" align="center"></div></div>');
		$('#selesai').hide();
			 var idi = page.query.id;
			$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/selesai_disposisi",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"disposisi":idi,
				"id":store.get('id')
				},
			success: function (data) {
			myApp.alert(data.result);
			mainView.router.loadPage('index.html');
			
		}
		});
		
	});
	
	});
	
	
 
   myApp.onPageInit('register', function (page) {

FCMPlugin.getToken(function(token){
 $("#fcm_token").val(token);
});


    $('#ph').change(function() {
		$(".preloader").fadeOut("slow");
			$("#loding_register").append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" id="daftarder" align="center"></div></div>');

			$("#nama_pd").empty();
			
			var pilih = $(this).val();
	
					 
	$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/pd_pemkot/"+pilih+"",
	dataType: "json",
	type: "GET",
	
	success: function (data) {
		
	
	
			
			$.each(data.result, function(i,fieldx){ 
		
				$$('#nama_pd').append('<option value="'+fieldx['nama']+'">'+fieldx['nama']+'</option>');
			
		
		});
					
		
		$(".preloader").fadeOut("slow");	
	
	}	
 
});


		
		});
		
		
		
		
		
$$('#daftar').on('click', function () {


	$("#loding_register").append('<div class="infinite-scroll-preloader" align="center"> <div class="preloader ks-preloader-big preloader-red" id="daftarder" align="center"></div></div>');
   
     


	var token_id = $$('#fcm_token').val();
	var name =  $$('#nama').val();
	var email  = $$('#email').val();
	var no_hp  = $$('#hp').val();
	var id_device  = $$('#id_device').val();
	var pass = $$('#pass').val();
	var golongan = $('#ph').val();
	var pd = $$('#nama_pd').val();
	var alamat  = "alamat";
	var foto_pic = "user.ico";
	var foto_cover = "bitung.jpg";
	var level_ny = "4";
	
	
	

   if (name === '') {

		myApp.alert('Nama masih kosong');
		$(".preloader").fadeOut("slow");

		
	}
	else  if(email === '') { 
		myApp.alert('email masih kosong');
		$(".preloader").fadeOut("slow");
	} 
	else  if(no_hp === '') { 
		myApp.alert('no Hp masih kosong');
		$(".preloader").fadeOut("slow");
	} 
	else  if(pass === '') { 
		myApp.alert('Password masih kosong');
		$(".preloader").fadeOut("slow");
	} 
	else  if(golongan === '') { 
		myApp.alert('Perangkat Daerah Belum Di tentukan');
		$(".preloader").fadeOut("slow");
	} 
	
	else  if(pd === '') { 
		myApp.alert('Nama Perangkat Daerah Belum Di Tentukan');
		$(".preloader").fadeOut("slow");
	} 
	else {


			$.ajax({
	url: "http://156.67.217.240/serv_sipiki/public/api/reg_daf",
	dataType: "json",
	type: "POST",
	data: {"name":name,
		   "email":email,
		   "password":pass,
		   "no_hp":no_hp,
		   "id_device":id_device,
		   "foto_pic":foto_pic,
		   "foto_cover":foto_cover,
		   "alamat":alamat,
		   "golongan":golongan,
		   "spd":pd,
		   "level":level_ny,
		   "id_device":token_id,
		   
		 
		  },
		success: function (data) {
		
		if(data.hasil == 0 ) {
			myApp.alert(data.result);
			$(".preloader").fadeOut("slow");
		} 
		
		
		else {
			
myApp.alert(data.result);
		mainView.router.loadPage("login.html");

		
	}
		}
 
});

	}


   

});
  






	
 }); 
 
 

  myApp.onPageInit('news', function (page) {


	$('#buat_news').on('click', function() {
	
	var ket = $$('#ket').val().trim();
			
	if (ket.length < 1) {

		myApp.alert('keterangan masi kosong');
		$(".preloader").fadeOut("slow");

		
	}
	
	else {
	
	
			$.ajax({
		url: "http://156.67.217.240/serv_sipiki/public/api/simpan_news",
		dataType: "json",
		type: "POST",
		data: {
				"token":store.get('token'),
				"ket":ket
				},
			success: function (data) {
			myApp.alert(data.result);
			mainView.router.loadPage('index.html');
			
		}
		});
		}
	
		
	});
	
 });