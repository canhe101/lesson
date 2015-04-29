var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    	    if(a+b<=c) return false;
    	 
    		return true ;
    },
    isIsosceles : function(a,b,c) {
    	if(a<=0) return false;
    	if(a!=b&&a+b<=c)return false; 
    	    return true ;
    },
    isScalene:function(a,b,c){
    	if(a<=0) return false;
    	if(a+b<=c)return false;
    	return true;
    }
};
