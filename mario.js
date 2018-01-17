
printPyramid(9);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) 
{
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    for(var i = 0; i < height; i++)
    {
        var line = "";
        for(var j = 0; j < height + 2; j++)
        {
            if(j >= height - i)
            {
                line += "#";
            }
            else
            {
                line += " ";
            }
        }
        console.log(line);
    }
}
