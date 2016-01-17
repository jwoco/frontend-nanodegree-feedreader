/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
         });


        /* This test loops through each feed in the AllFeeds
         * object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a name defined
         * and that the name is not empty.
         */

         it('name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

         });
    });


    /* This test suite is named "The menu" */

        /* The first test in teh suite ensures the menu element is
         * hidden by default.
         */

        /* The second test in the suite ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

    describe('The menu', function() {

         it('hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

         it('displays menu when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
         });

         it('hides menu when clicked again', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

    });



    /* This test suite is named "Initial Entries" */

        /* The test in the suite ensures when the loadFeed function is
         * called and completes its work, there is at least a single
         * .entry element within the .feed container.
         */

    describe('Initial Entries', function() {

         beforeEach(function(done) {
            loadFeed(0,done);
         });

         it('should be able to get an entry', function(done) {
            var entry = $('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);
            done();
         });

    });

    /* This test suite is named "New Feed Selection"

        /* This test ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */

    describe('New Feed Selection', function() {

         var feed1;
             //feed0;

         beforeEach(function(done) { //test feed 2
            loadFeed(1, function() {
                feed1 = $('.feed').html();
                done();
            });
         });


         it('new feed is loaded and content changes', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(feed1); //check content
                done();
            });
         });
    });
}());
