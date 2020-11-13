   //botones todos
   var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var e = document.getElementById("e");
    var f = document.getElementById("f");
    var g = document.getElementById("g");
    var h = document.getElementById("h");
    var ii = document.getElementById("i");
    var j = document.getElementById("j");
    var k = document.getElementById("k");
    var l = document.getElementById("l");
    var m = document.getElementById("m");
    var n = document.getElementById("n");
    var ñ = document.getElementById("ñ");
    var o = document.getElementById("o");
    var p = document.getElementById("p");
    var q = document.getElementById("q");
    var r = document.getElementById("r");
    var s = document.getElementById("s");
    var t = document.getElementById("t");
    var u = document.getElementById("u");
    var v = document.getElementById("v");
    var w = document.getElementById("w");
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var z = document.getElementById("z");

    var intentos = 0;
    var aciertos = 0;

   //Obtencion de palabra random a descubrir
    //Codigo verificado! y funcional
    function palabraAleatoria(){
        var bancoPalabras = ["anime","ganzo","amigo","gente","padre","madre","manzo","atico","agudo","mango","gesto","patos","moral","etica","arbol","plato", "aries","acilo","añejo","costa"];
        var nRandom = Math.floor(Math.random() * 20);
        var palabraObtenida = bancoPalabras[nRandom];
        return palabraObtenida;
        }
    
        //Insercion de palabra obtenida a html
        //Codigo verificado y funcional
            var listaLetras = [];
            var letras = palabraAleatoria();

            for(var i = 0; i <= letras.length-1; i++){
                 listaLetras[i] = letras.charAt(i).toUpperCase();
            }
            
        //Botones 
        //codigo verificado y funcional
        a.onclick = function(){
            if(listaLetras[0] == a.value){
                     document.getElementById("ja").innerHTML = a.value;
                     aciertos =1;
                     
                }else if(listaLetras[1] == a.value){
                    document.getElementById("je").innerHTML = a.value;
                    aciertos =1;     
                }else if(listaLetras[2] == a.value){
                    document.getElementById("ji").innerHTML = a.value;
                    aciertos =1;
                }else if(listaLetras[3] == a.value){
                    document.getElementById("jo").innerHTML = a.value;
                    aciertos =1;
                }else if(listaLetras[4] == a.value){
                    document.getElementById("ju").innerHTML = a.value;
                    aciertos =1;
                }else{
                    intentos += 1;
                    alert("Fallaste llevas "+intentos+" intento.");
                    if(intentos > 6){
                        document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                    }  
                }
        }

        b.onclick = function(){
            if(listaLetras[0] == b.value){
                document.getElementById("ja").innerHTML = b.value;
                aciertos =1;
           }else if(listaLetras[1] == b.value){
               document.getElementById("je").innerHTML = b.value; 
               aciertos =1;    
           }else if(listaLetras[2] == b.value){
               document.getElementById("ji").innerHTML = b.value;
               aciertos =1;
           }else if(listaLetras[3] == b.value){
               document.getElementById("jo").innerHTML = b.value;
               aciertos =1;
           }else if(listaLetras[4] == b.value){
               document.getElementById("ju").innerHTML = b.value;
               aciertos =1;
           }else{
                intentos += 1;
                alert("Fallaste llevas "+intentos+" intento.");
                if(intentos > 6){
                    document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                }  
            }
        }

        c.onclick = function(){
            if(listaLetras[0] == c.value){
                document.getElementById("ja").innerHTML = c.value;
                aciertos =1;
           }else if(listaLetras[1] == c.value){
               document.getElementById("je").innerHTML = c.value; 
               aciertos =1;    
           }else if(listaLetras[2] == c.value){
               document.getElementById("ji").innerHTML = c.value;
               aciertos =1;
           }else if(listaLetras[3] == c.value){
               document.getElementById("jo").innerHTML = c.value;
               aciertos =1;
           }else if(listaLetras[4] == c.value){
               document.getElementById("ju").innerHTML = c.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        d.onclick = function(){
            if(listaLetras[0] == d.value){
                document.getElementById("ja").innerHTML = d.value;
                aciertos =1;
           }else if(listaLetras[1] == d.value){
               document.getElementById("je").innerHTML = d.value; 
               aciertos =1;    
           }else if(listaLetras[2] == d.value){
               document.getElementById("ji").innerHTML = d.value;
               aciertos =1;
           }else if(listaLetras[3] == d.value){
               document.getElementById("jo").innerHTML = d.value;
               aciertos =1;
           }else if(listaLetras[4] == d.value){
               document.getElementById("ju").innerHTML = d.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        e.onclick = function(){
            if(listaLetras[0] == e.value){
                document.getElementById("ja").innerHTML = e.value;
                aciertos =1;
           }else if(listaLetras[1] == e.value){
               document.getElementById("je").innerHTML = e.value;
               aciertos =1;     
           }else if(listaLetras[2] == e.value){
               document.getElementById("ji").innerHTML = e.value;
               aciertos =1;
           }else if(listaLetras[3] == e.value){
               document.getElementById("jo").innerHTML = e.value;
               aciertos =1;
           }else if(listaLetras[4] == e.value){
               document.getElementById("ju").innerHTML = e.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        f.onclick = function(){
            if(listaLetras[0] == f.value){
                document.getElementById("ja").innerHTML = f.value;
                aciertos =1;
           }else if(listaLetras[1] == f.value){
               document.getElementById("je").innerHTML = f.value;
               aciertos =1;     
           }else if(listaLetras[2] == f.value){
               document.getElementById("ji").innerHTML = f.value;
               aciertos =1;
           }else if(listaLetras[3] == f.value){
               document.getElementById("jo").innerHTML = f.value;
               aciertos =1;
           }else if(listaLetras[4] == f.value){
               document.getElementById("ju").innerHTML = f.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        g.onclick = function(){
            if(listaLetras[0] == g.value){
                document.getElementById("ja").innerHTML = g.value;
                aciertos =1;
           }else if(listaLetras[1] == g.value){
               document.getElementById("je").innerHTML = g.value; 
               aciertos =1;    
           }else if(listaLetras[2] == g.value){
               document.getElementById("ji").innerHTML = g.value;
               aciertos =1;
           }else if(listaLetras[3] == g.value){
               document.getElementById("jo").innerHTML = g.value;
               aciertos =1;
           }else if(listaLetras[4] == g.value){
               document.getElementById("ju").innerHTML = g.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        h.onclick = function(){
            if(listaLetras[0] == h.value){
                document.getElementById("ja").innerHTML = h.value;
                aciertos =1;
           }else if(listaLetras[1] == h.value){
               document.getElementById("je").innerHTML = h.value;
               aciertos =1;     
           }else if(listaLetras[2] == h.value){
               document.getElementById("ji").innerHTML = h.value;
               aciertos =1;
           }else if(listaLetras[3] == h.value){
               document.getElementById("jo").innerHTML = h.value;
               aciertos =1;
           }else if(listaLetras[4] == h.value){
               document.getElementById("ju").innerHTML = h.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        ii.onclick = function(){
            if(listaLetras[0] == ii.value){
                document.getElementById("ja").innerHTML = ii.value;
                aciertos =1;
           }else if(listaLetras[1] == ii.value){
               document.getElementById("je").innerHTML = ii.value;  
               aciertos =1;   
           }else if(listaLetras[2] == ii.value){
               document.getElementById("ji").innerHTML = ii.value;
               aciertos =1;
           }else if(listaLetras[3] == ii.value){
               document.getElementById("jo").innerHTML = ii.value;
               aciertos =1;
           }else if(listaLetras[4] == ii.value){
               document.getElementById("ju").innerHTML = ii.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        j.onclick = function(){
            if(listaLetras[0] == j.value){
                document.getElementById("ja").innerHTML = j.value;
                aciertos =1;
           }else if(listaLetras[1] == j.value){
               document.getElementById("je").innerHTML = j.value;
               aciertos =1;     
           }else if(listaLetras[2] == j.value){
               document.getElementById("ji").innerHTML = j.value;
               aciertos =1;
           }else if(listaLetras[3] == j.value){
               document.getElementById("jo").innerHTML = j.value;
               aciertos =1;
           }else if(listaLetras[4] == j.value){
               document.getElementById("ju").innerHTML = j.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        k.onclick = function(){
            if(listaLetras[0] == k.value){
                document.getElementById("ja").innerHTML = k.value;
                aciertos =1;
           }else if(listaLetras[1] == k.value){
               document.getElementById("je").innerHTML = k.value;  
               aciertos =1;   
           }else if(listaLetras[2] == k.value){
               document.getElementById("ji").innerHTML = k.value;
               aciertos =1;
           }else if(listaLetras[3] == k.value){
               document.getElementById("jo").innerHTML = k.value;
               aciertos =1;
           }else if(listaLetras[4] == k.value){
               document.getElementById("ju").innerHTML = k.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        l.onclick = function(){
            if(listaLetras[0] == l.value){
                document.getElementById("ja").innerHTML = l.value;
                aciertos =1;
           }else if(listaLetras[1] == l.value){
               document.getElementById("je").innerHTML = l.value;  
               aciertos =1;   
           }else if(listaLetras[2] == l.value){
               document.getElementById("ji").innerHTML = l.value;
               aciertos =1;
           }else if(listaLetras[3] == l.value){
               document.getElementById("jo").innerHTML = l.value;
               aciertos =1;
           }else if(listaLetras[4] == l.value){
               document.getElementById("ju").innerHTML = l.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        m.onclick = function(){
            if(listaLetras[0] == m.value){
                document.getElementById("ja").innerHTML = m.value;
                aciertos =1;
           }else if(listaLetras[1] == m.value){
               document.getElementById("je").innerHTML = m.value; 
               aciertos =1;    
           }else if(listaLetras[2] == m.value){
               document.getElementById("ji").innerHTML = m.value;
               aciertos =1;
           }else if(listaLetras[3] == m.value){
               document.getElementById("jo").innerHTML = m.value;
               aciertos =1;
           }else if(listaLetras[4] == m.value){
               document.getElementById("ju").innerHTML = m.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        n.onclick = function(){
            if(listaLetras[0] == n.value){
                document.getElementById("ja").innerHTML = n.value;
                aciertos =1;
           }else if(listaLetras[1] == n.value){
               document.getElementById("je").innerHTML = n.value;  
               aciertos =1;   
           }else if(listaLetras[2] == n.value){
               document.getElementById("ji").innerHTML = n.value;
               aciertos =1;
           }else if(listaLetras[3] == n.value){
               document.getElementById("jo").innerHTML = n.value;
               aciertos =1;
           }else if(listaLetras[4] == n.value){
               document.getElementById("ju").innerHTML = n.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        ñ.onclick = function(){
            if(listaLetras[0] == ñ.value){
                document.getElementById("ja").innerHTML = ñ.value;
                aciertos =1;
           }else if(listaLetras[1] == ñ.value){
               document.getElementById("je").innerHTML = ñ.value; 
               aciertos =1;    
           }else if(listaLetras[2] == ñ.value){
               document.getElementById("ji").innerHTML = ñ.value;
               aciertos =1;
           }else if(listaLetras[3] == ñ.value){
               document.getElementById("jo").innerHTML = ñ.value;
               aciertos =1;
           }else if(listaLetras[4] == ñ.value){
               document.getElementById("ju").innerHTML = ñ.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        o.onclick = function(){
            if(listaLetras[0] == o.value){
                document.getElementById("ja").innerHTML = o.value;
                aciertos =1;
           }else if(listaLetras[1] == o.value){
               document.getElementById("je").innerHTML = o.value;
               aciertos =1;     
           }else if(listaLetras[2] == o.value){
               document.getElementById("ji").innerHTML = o.value;
               aciertos =1;
           }else if(listaLetras[3] == o.value){
               document.getElementById("jo").innerHTML = o.value;
               aciertos =1;
           }else if(listaLetras[4] == o.value){
               document.getElementById("ju").innerHTML = o.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        p.onclick = function(){
            if(listaLetras[0] == p.value){
                document.getElementById("ja").innerHTML = p.value;
                aciertos =1;
           }else if(listaLetras[1] == p.value){
               document.getElementById("je").innerHTML = p.value; 
               aciertos =1;    
           }else if(listaLetras[2] == p.value){
               document.getElementById("ji").innerHTML = p.value;
               aciertos =1;
           }else if(listaLetras[3] == p.value){
               document.getElementById("jo").innerHTML = p.value;
               aciertos =1;
           }else if(listaLetras[4] == p.value){
               document.getElementById("ju").innerHTML = p.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        q.onclick = function(){
            if(listaLetras[0] == q.value){
                document.getElementById("ja").innerHTML = q.value;
                aciertos =1;
           }else if(listaLetras[1] == q.value){
               document.getElementById("je").innerHTML = q.value;
               aciertos =1;     
           }else if(listaLetras[2] == q.value){
               document.getElementById("ji").innerHTML = q.value;
               aciertos =1;
           }else if(listaLetras[3] == q.value){
               document.getElementById("jo").innerHTML = q.value;
               aciertos =1;
           }else if(listaLetras[4] == q.value){
               document.getElementById("ju").innerHTML = q.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        r.onclick = function(){
            if(listaLetras[0] == r.value){
                document.getElementById("ja").innerHTML = r.value;
                aciertos =1;
           }else if(listaLetras[1] == r.value){
               document.getElementById("je").innerHTML = r.value;
               aciertos =1;     
           }else if(listaLetras[2] == r.value){
               document.getElementById("ji").innerHTML = r.value;
               aciertos =1;
           }else if(listaLetras[3] == r.value){
               document.getElementById("jo").innerHTML = r.value;
               aciertos =1;
           }else if(listaLetras[4] == r.value){
               document.getElementById("ju").innerHTML = r.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        s.onclick = function(){
            if(listaLetras[0] == s.value){
                document.getElementById("ja").innerHTML = s.value;
                aciertos =1;
           }else if(listaLetras[1] == s.value){
               document.getElementById("je").innerHTML = s.value; 
               aciertos =1;    
           }else if(listaLetras[2] == s.value){
               document.getElementById("ji").innerHTML = s.value;
               aciertos =1;
           }else if(listaLetras[3] == s.value){
               document.getElementById("jo").innerHTML = s.value;
               aciertos =1;
           }else if(listaLetras[4] == s.value){
               document.getElementById("ju").innerHTML = s.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        t.onclick = function(){
            if(listaLetras[0] == t.value){
                document.getElementById("ja").innerHTML = t.value;
                aciertos =1;
           }else if(listaLetras[1] == t.value){
               document.getElementById("je").innerHTML = t.value;  
               aciertos =1;   
           }else if(listaLetras[2] == t.value){
               document.getElementById("ji").innerHTML = t.value;
               aciertos =1;
           }else if(listaLetras[3] == t.value){
               document.getElementById("jo").innerHTML = t.value;
               aciertos =1;
           }else if(listaLetras[4] == t.value){
               document.getElementById("ju").innerHTML = t.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        u.onclick = function(){
            if(listaLetras[0] == u.value){
                document.getElementById("ja").innerHTML = u.value;
                aciertos =1;
           }else if(listaLetras[1] == u.value){
               document.getElementById("je").innerHTML = u.value; 
               aciertos =1;    
           }else if(listaLetras[2] == u.value){
               document.getElementById("ji").innerHTML = u.value;
               aciertos =1;
           }else if(listaLetras[3] == u.value){
               document.getElementById("jo").innerHTML = u.value;
               aciertos =1;
           }else if(listaLetras[4] == u.value){
               document.getElementById("ju").innerHTML = u.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        v.onclick = function(){
            if(listaLetras[0] == v.value){
                document.getElementById("ja").innerHTML = v.value;
                aciertos =1;
           }else if(listaLetras[1] == v.value){
               document.getElementById("je").innerHTML = v.value;  
               aciertos =1;   
           }else if(listaLetras[2] == v.value){
               document.getElementById("ji").innerHTML = v.value;
               aciertos =1;
           }else if(listaLetras[3] == v.value){
               document.getElementById("jo").innerHTML = v.value;
               aciertos =1;
           }else if(listaLetras[4] == v.value){
               document.getElementById("ju").innerHTML = v.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        w.onclick = function(){
            if(listaLetras[0] == w.value){
                document.getElementById("ja").innerHTML = w.value;
                aciertos =1;
           }else if(listaLetras[1] == w.value){
               document.getElementById("je").innerHTML = w.value;  
               aciertos =1;   
           }else if(listaLetras[2] == w.value){
               document.getElementById("ji").innerHTML = w.value;
               aciertos =1;
           }else if(listaLetras[3] == w.value){
               document.getElementById("jo").innerHTML = w.value;
               aciertos =1;
           }else if(listaLetras[4] == w.value){
               document.getElementById("ju").innerHTML = w.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        x.onclick = function(){
            if(listaLetras[0] == x.value){
                document.getElementById("ja").innerHTML = x.value;
                aciertos =1;
           }else if(listaLetras[1] == x.value){
               document.getElementById("je").innerHTML = x.value;
               aciertos =1;     
           }else if(listaLetras[2] == x.value){
               document.getElementById("ji").innerHTML = x.value;
               aciertos =1;
           }else if(listaLetras[3] == x.value){
               document.getElementById("jo").innerHTML = x.value;
               aciertos =1;
           }else if(listaLetras[4] == x.value){
               document.getElementById("ju").innerHTML = x.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        y.onclick = function(){
            if(listaLetras[0] == y.value){
                document.getElementById("ja").innerHTML = y.value;
                aciertos =1;
           }else if(listaLetras[1] == y.value){
               document.getElementById("je").innerHTML = y.value;
               aciertos =1;     
           }else if(listaLetras[2] == y.value){
               document.getElementById("ji").innerHTML = y.value;
               aciertos =1;
           }else if(listaLetras[3] == y.value){
               document.getElementById("jo").innerHTML = y.value;
               aciertos =1;
           }else if(listaLetras[4] == y.value){
               document.getElementById("ju").innerHTML = y.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }

        z.onclick = function(){
            if(listaLetras[0] == z.value){
                document.getElementById("ja").innerHTML = z.value;
                aciertos =1;
           }else if(listaLetras[1] == z.value){
               document.getElementById("je").innerHTML = z.value; 
               aciertos =1;    
           }else if(listaLetras[2] == z.value){
               document.getElementById("ji").innerHTML = z.value;
               aciertos =1;
           }else if(listaLetras[3] == z.value){
               document.getElementById("jo").innerHTML = z.value;
               aciertos =1;
           }else if(listaLetras[4] == z.value){
               document.getElementById("ju").innerHTML = z.value;
               aciertos =1;
            }else{
                 intentos += 1;
                 alert("Fallaste llevas "+intentos+" intento.");
                 if(intentos > 6){
                     document.write("PERDISTE. La palabra secreta es: "+ letras+ " \n Para volver a jugar recarga la pagina");
                 }  
             }
        }
        

   if(aciertos >= 5){
       document.write("ganaste");
   }


   //ESte boton recargaria la agina pero no puede hacerlo.
$(document).ready(function(){
          $("#enter").click(function (e) { 
              
            var letras = palabraAleatoria();
              
          });

        $("#enter").click(function (e) { 
            onloadeddata("ahorcado.html");
            
        });

});