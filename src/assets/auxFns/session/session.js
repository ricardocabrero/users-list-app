class handleStorage{
	constructor(param, newStorage){
		this.storage = this.storage || null;
        this.newStorage = newStorage || null
        this.param = param;
	}
	
	check(){
		this.storage =  JSON.parse(sessionStorage.getItem('page-'+this.param))
		return this.storage		
    }
    
    updated(){
        sessionStorage.setItem('page-'+this.param, JSON.stringify(this.newStorage))
    }
}

export default handleStorage