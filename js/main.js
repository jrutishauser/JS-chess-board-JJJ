function print(){
    
    document.write('<div class="container-fluid">')
    document.write('<table border="1">');
    _.times(8, function(){
        document.write('<tr>');
        _.times(8, function(){
            document.write('<td></td>');
        });
        document.write('</tr>');
    });
    
    
    document.write('</table>');
}


print();
